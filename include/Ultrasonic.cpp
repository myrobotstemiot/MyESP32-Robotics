/******************************************************************
 * Ultrasonic HC-SR04 library for KB-IDE by bavensky
 *****************************************************************/

#include "Ultrasonic.h"

ULTRASONIC::ULTRASONIC() {}
ULTRASONIC::~ULTRASONIC() {}

void ULTRASONIC::begin(uint8_t _echo, uint8_t _trig)
{
  ECHO = _echo;
  TRIG = _trig;
  pinMode(ECHO, INPUT);
  pinMode(TRIG, OUTPUT);
}

unsigned int ULTRASONIC::read_distance_cm() {
  duration = 0;
  distance = 0;
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  duration = pulseIn(ECHO, 1, 15000);
  distance = (duration / 2) / 29;
  return distance;
}
