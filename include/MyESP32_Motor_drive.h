
void motor(int pin,int _direction, int _Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  if (pin == 1) {
    _SpeedsA = abs(_Speeds);
    _SpeedsA = _SpeedsA * 2.55;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (_direction == 1) {
      ledcWrite(13, 255 - abs(_SpeedsA));
      ledcWrite(12, 255);
    }
    else if (_direction ==2 ) {
      ledcWrite(13, 255);
      ledcWrite(12, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 2) {
    _SpeedsB = abs(_Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (_direction == 1) {
      ledcWrite(15, 255 - abs(_SpeedsB));
      ledcWrite(14, 255);
    }
    else if (_direction == 2) {
      ledcWrite(15, 255);
      ledcWrite(14, 255- abs(_SpeedsB));
    }
  }
  if (pin == 3) {
    _SpeedsB = abs(_Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (_direction == 1) {
      ledcWrite(15, 255- abs(_SpeedsB));
      ledcWrite(14, 255);
      ledcWrite(13, 255- abs(_SpeedsB));
      ledcWrite(12, 255);
    }
    else if (_direction == 2) {
      ledcWrite(15, 255);
      ledcWrite(14, 255- abs(_SpeedsB));
      ledcWrite(13, 255);
      ledcWrite(12, 255- abs(_SpeedsB));
    }
  }
  delay(1);
}
void motor(int motor_ch,int speed_motor){
  if(speed_motor > 0){
    if(motor_ch == 1){motor(motor_ch,1,speed_motor);}
    if(motor_ch == 2){motor(motor_ch,1,speed_motor);}
  }
  else{
    if(motor_ch == 1){motor(motor_ch,2,speed_motor);}
    if(motor_ch == 2){motor(motor_ch,2,speed_motor);}

  }
}
void fdt(int speeda, int speedb,int time_speed){ 
  motor(1,1,speeda);
  motor(2,1,speeda);
  delay(time_speed);
}
// void stop(){
//   motor(1,1,0);
//   motor(2,1,0);
// }
void stopt(int _timer){
  motor(1,1,1);
  motor(2,1,1);
  delay(_timer);
}
void brake() {
  ledcWrite(12, 255); //M1A
  ledcWrite(13, 255); //M1B
  ledcWrite(14, 255); //M2A
  ledcWrite(15, 255); //M2B
}

void stop() {
  ledcWrite(12, 1); //M1A
  ledcWrite(13, 1); //M1B
  ledcWrite(14, 1); //M2A
  ledcWrite(15, 1); //M2B
}
void braket(int _timer){
  motor(1,1,1);
  motor(2,1,1);
  delay(_timer);
}
void fd(int _Speed){
  motor(1,1,_Speed);
  motor(2,1,_Speed);
}
void bk(int _Speed){
  motor(1,2,_Speed);
  motor(2,2,_Speed);
}
void lt(int _Speed){
  motor(1,2,0);
  motor(2,1,_Speed);
}
void rt(int _Speed){
  motor(1,1,_Speed);
  motor(2,2,1);
}

void sl(int _Speed){
  motor(1,2,_Speed);
  motor(2,1,_Speed);
}
void sr(int _Speed){
  motor(1,1,_Speed);
  motor(2,2,_Speed);
}
void ao(){
  motor(1,1,1);
  motor(2,1,1);
}
void aot(int _timer){
  motor(1,1,1);
  motor(2,1,1);
  delay(_timer);
}
void MT(int speeda, int speedb,int time_speed){ 
  motor(1,1,speeda);
  motor(2,1,speeda);
  delay(time_speed);
}
void turn(int status,int speedIN){
  if(status == 0){
    lt(speedIN);
  }
  else if(status ==1){
    rt(speedIN);
  }
}
void Spin(int status,int speedIN){
  if(status == 0){
    sl(speedIN);
  }
  else if(status ==1){
    sr(speedIN);
  }
}
void SpinT(int status,int speedIN,int time_spin){
  if(status == 0){
    sl(speedIN);
  }
  else if(status ==1){
    sr(speedIN);
  }
  delay(time_spin);
  ledcWrite(12, 255); //M1A
  ledcWrite(13, 255);
  ledcWrite(14, 255); //M2A
  ledcWrite(15, 255);
}
void stop_sp(int ch,int status){
  if(status == 0){
    if(ch == 1){
      ledcWrite(12, 255); //M1A
      ledcWrite(13, 255);
    }
    else if(ch ==2) {
      ledcWrite(14, 255); //M2A
      ledcWrite(15, 255);
    }
    else
    {
      ledcWrite(12, 255); //M1A
      ledcWrite(13, 255);
      ledcWrite(14, 255); //M2A
      ledcWrite(15, 255);
    }
  }
  else if(status == 1)
  {
    if(ch == 1){
      ledcWrite(12, 1); //M1A
      ledcWrite(13, 1);
    }
    else if(ch ==2) {
      ledcWrite(14, 1); //M2A
      ledcWrite(15, 1);
    }
    else
    {
      ledcWrite(12, 1); //M1A
      ledcWrite(13, 1);
      ledcWrite(14, 1); //M2A
      ledcWrite(15, 1);
    }
  }
}
