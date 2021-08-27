#include <FS.h>                   //this needs to be first, or it all crashes and burns...
#include <SPIFFS.h>
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <memory>
#include <Wire.h>  
#include <esp_wifi.h>
#include <SPI.h>

#include "MyESP32_Motor_drive.h"
#include "MyESP32_Servo_lib.h"
#include "MyESP32_IO.h"
#include "Adafruit_TCS34725.h"
#include "Arduino_GFX_Library.h"

#include "vector"
#define TONE_CHANNEL 1
static const uint8_t KB_BUZZER = 14;
#define BUZZER_PIN 19
#define SOUND_PWM_CHANNEL 0
#define SOUND_RESOLUTION 8
#define SOUND_ON (1 << (SOUND_RESOLUTION - 1))
#define SOUND_OFF 0

unsigned long timeElapsed;

SSD1306Wire display(0x3c, 21, 22);

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);
Arduino_DataBus *bus = new Arduino_ESP32SPI(4 /* DC */, 5 /* CS */, 18 /* SCK */, 23 /* MOSI */, 19 /* MISO */);
Arduino_GFX *gfx = new Arduino_ST7735(bus, -1 /* RST*/, 0 /* rotation */, false /* IPS */,128 /* width */, 160 /* height */, 0 /* col offset 1 */, 0 /* row offset 1 */, 0 /* col offset 2 */, 0 /* row offset 2 */, false /* BGR */);

#define M1A 16
#define M1B 17
#define M2A 14
#define M2B 15
#define A0 32
#define A1 33
#define A2 25
#define A3 26
#define A4 27
#define A5 12
#define A6 13
#define A7 2

int PID_NumPin = 5;
int PID_SetupPin[] = {0,0,0,0,0,0,0,0};
int PID_Min[] = {10,10,10,10,10,10,10,10};
int PID_Max[] = {1000,1000,1000,1000,1000,1000,1000,1000};
uint16_t state_on_Line = 0;
uint32_t _lastPosition;
float Kp = 1;
float Ki = 0;
float Kd = 0;
int TCS_init = 0;

void wait();
void beep();
// int TCS_Read(int C=1);


class KB_music
{
 public:
  void begin(void);
  void tone(unsigned int frequency, unsigned long duration = 0);
  void noTone();
  void song(std::vector<int> notes,int duration);

 protected:
  uint16_t channel;
  uint16_t bit;

 private:
};



void KB_music::begin(void) {
    //ledcSetup(TONE_CHANNEL, 5000, 13);
}

void KB_music::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(KB_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        delay(duration);
        noTone();
    }
}

void KB_music::noTone()
{
    ledcDetachPin(KB_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void KB_music::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}

KB_music music = KB_music();

void tone(int pin, int frequency, int duration) {
  ledcSetup(0, frequency, 8);
  ledcAttachPin(pin, 0);
  ledcWrite(0, SOUND_ON);
  delay(duration);
  ledcWrite(0, SOUND_OFF);
}

void MyESP32(){

  Serial.begin(115200);
  music.begin();
  gfx->begin();
  gfx->fillScreen(0x0000);
  pinMode(34,INPUT);
  pinMode(35,INPUT);
  pinMode(36,INPUT);
  pinMode(19,OUTPUT);
  
  // Read sensor for 0-1023 (2^10=1024)
  analogReadResolution(10); 

  gfx->setTextSize(2);
  gfx->setCursor(20, 20);
  gfx->println(String("MyESP32"));
  gfx->setTextSize(2);
  gfx->setCursor(20, 45);
  gfx->println(String("Myrobot"));
  gfx->setCursor(40, 70);
  gfx->println(String("STEM"));
  gfx->setCursor(20, 100);
  gfx->println(String("V.2.0.0"));
  
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"MyESP32");
  display.drawString(30,20,"MyrobotStem");
  display.drawString(25,40,"Version 2.0.0");
  display.display();
  delay(1000);
  
  
  pinMode(39, INPUT); // Knob
  //botton.pinMode(5, OUTPUT); // LED default ON [Ready}

  //botton.begin();
  
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  
  ledcSetup(12, 5000, 8);
  ledcSetup(13, 5000, 8);
  ledcSetup(14, 5000, 8);
  ledcSetup(15, 5000, 8);
  
  ledcAttachPin(M1A, 12);
  ledcAttachPin(M1B, 13);
  ledcAttachPin(M2A, 14);
  ledcAttachPin(M2B, 15);

  if (tcs.begin()) {
     Serial.println("Found sensor");
  }
//
//  if (tcs.begin()) {
//     Serial.println("Found Color sensor");
//  }
//  
  for(int i=0;i<3;i++){
	  digitalWrite(5, LOW);
	  delay(200);
	  digitalWrite(5, HIGH);
	  delay(200);
  }
  
  // Splash Screen //
  gfx->setTextSize(3);
  gfx->setTextColor(0xFFFF);
  for (int i = 120; i >= -100; i -= 10) {
    gfx->fillRect(0,0,128,128,0x000);
    gfx->setCursor(i, 64);
    gfx->println(String("Ready!"));
    display.clear();
    display.setFont(ArialMT_Plain_24);
    display.drawString(i, 15, String("Ready!"));
    display.display();
    delay(100);
  }
  
  display.clear();

  
  beep();
  //wait();
}

void wait(){
  // Press for button [A] press //
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("Button [A]"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  
  int Button_A = 0;
  do{
	Button_A = digitalRead(34);
  }while(!Button_A);
  // End - Press for button [A] press //
}

#define _knob 39
int _Knob(){
  return analogRead(_knob);
}
void beep(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200);
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
void beep_on(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}
float TCS_Read(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
   float average_lib, r_lib, g_lib, b_lib;
   //delay(100); // Farbmessung dauert c. 50ms 
   tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
   average_lib = (red_lib+green_lib+blue_lib)/3;
   r_lib = red_lib/average_lib;
   g_lib = green_lib/average_lib;
   b_lib = blue_lib/average_lib;
   if(color_of_sensor == 0){
    return r_lib*100;
   }
   else if(color_of_sensor == 1){
    return g_lib*100;
   }
    else if(color_of_sensor == 2){
    return b_lib*100;
   }
 }
float ultrasonic(int ECHO,int TRIG){
  pinMode(ECHO,INPUT);
  pinMode(TRIG,OUTPUT);
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH);
  // Calculating the distance
  return duration*0.034/2;
}
void PID_set_Min(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min[0] = S0;PID_Min[1] = S1;PID_Min[2] = S2;PID_Min[3] = S3;
  PID_Min[4] = S4;PID_Min[5] = S5;PID_Min[6] = S6;PID_Min[7] = S7;
}
void PID_set_Max(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max[0] = S0;PID_Max[1] = S1;PID_Max[2] = S2;PID_Max[3] = S3;
  PID_Max[4] = S4;PID_Max[5] = S5;PID_Max[6] = S6;PID_Max[7] = S7;
}
void PID_set_Pin(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin[0] = S0;PID_SetupPin[1] = S1;PID_SetupPin[2] = S2;PID_SetupPin[3] = S3;
  PID_SetupPin[4] = S4;PID_SetupPin[5] = S5;PID_SetupPin[6] = S6;PID_SetupPin[7] = S7;
}
int readline()   
{                
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_NumPin ; i++) 
  {
    long value = map(analogRead(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);    
    if (value > 25) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < ((PID_NumPin-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin-1) * 100);
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void Run_PID(int speed_motor,float kp,float kd){
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
    int speed_max = speed_motor;
    present_position = readline() ;
    setpoint = (((PID_NumPin-1) * 100)/2);
    errors = setpoint - present_position;
    integral = integral + errors ;
    derivative = (errors - previous_error) ;
    output = kp * errors + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
}