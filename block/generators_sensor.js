module.exports = function(Blockly){
  'use strict';

	Blockly.JavaScript['button_1_status'] = function(block) {  
	  var code = '(botton.digitalRead(P1))';  
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['button_2_status'] = function(block) {  
	  var code = '(botton.digitalRead(P2))';  
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['analog_sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');
	  var code = `analogRead(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};


	Blockly.JavaScript['digital_sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');
	  var code = `(analogRead(${value_pin})>500)?1:0`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};



	Blockly.JavaScript['TCS_read_rgb'] = function(block) {
	  var value_color = block.getFieldValue('color');  
	  var code = `TCS_Read(${value_color})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['Light sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');  
	  var code = `analog(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['Switch sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');  
	  var code = `in(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['LDR sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');  
	  var code = `analog(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['Distance sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');  
	  var code = `analog(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['Soil moisture sensor'] = function(block) {
	  var value_pin = block.getFieldValue('pin');  
	  var code = `analog(${value_pin})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['Ultrasonic sensor'] = function(block) {
	  var value_Trig = block.getFieldValue('Trig'); 
	  var value_Echo = block.getFieldValue('Echo');   
	  var code = `ultrasonic(${value_Echo},${value_Trig})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['dhtesp_setup_MyESP32'] = function(block) {
	  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
	  var dropdown_dht_type = block.getFieldValue('dht_type');
	  var number_pin = block.getFieldValue('pin'); 
	  var code = `
	#EXTINC#include "DHT.h"#END
	#VARIABLE DHT ${variable_instance}(${number_pin},${dropdown_dht_type});#END
	${variable_instance}.begin();
	`;
	  return code;
	};
	Blockly.JavaScript['dhtesp_read_temp_MyESP32'] = function(block) {
	  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
	  var code = `${variable_instance}.readTemperature()`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['dhtesp_read_humid_MyESP32'] = function(block) {
	  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
	  var code = `${variable_instance}.readHumidity()`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};


	Blockly.JavaScript['ds18b20_init_MyESP32'] = function(block) {
	  var number_pin = block.getFieldValue('pin');
	  var code = `#EXTINC
	#include <OneWire.h>
	#include <DallasTemperature.h>
	#END
	#VARIABLE
	OneWire oneWire_DS18B20(${number_pin}); 
	DallasTemperature sensors_ds18b20(&oneWire_DS18B20);
	#END
	`;
	  return code;
	};

	Blockly.JavaScript['ds18b20_get_devices_num_MyESP32'] = function(block) {
	  var code = `sensors_ds18b20.getDS18Count()`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ds18b20_get_temperature_MyESP32'] = function(block) {
	  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
	  var code = `sensors_ds18b20.getTemperatureC(${value_device})`;
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript["IRremote_sensor"] = function(block) {
		var number_pin = block.getFieldValue('pin');
	    /*var text_ky_022_ir_receiver_pin = block.getFieldValue(
	      "KY_022_IR_RECEIVER_PIN"
	    );*/
	    var variable_ky_022_ir_receiver_value = Blockly.JavaScript.variableDB_.getName(
	      block.getFieldValue("IR_RECEIVER_VALUE"),
	      Blockly.Variables.NAME_TYPE
	    );
	    // TODO: Assemble JavaScript into code variable.
	    var code = `
		#EXTINC
		#include <IRremote.h>

		int KY_022_IR_RECEIVER_PIN = ${number_pin}; // define input pin on Arduino 
		IRrecv irrecv(KY_022_IR_RECEIVER_PIN); 
		decode_results results; // decode_results class is defined in IRremote.h
		#END

		#SETUP
		irrecv.enableIRIn(); // Start the receiver 
		#END

		if (irrecv.decode(&results)) {
				// Serial.println(results.value, HEX); 
				${variable_ky_022_ir_receiver_value} = results.value;
				irrecv.resume(); // Receive the next value 
			}
			delay (100); // small delay to prevent reading errors
	    `;
	    return code;
  	};



}