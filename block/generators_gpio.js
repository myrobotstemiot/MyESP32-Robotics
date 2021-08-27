module.exports = function(Blockly) {
  "use strict";
  Blockly.JavaScript["ADC_MyESP32"] = function(block) {
    let dropdown_CH = block.getFieldValue("pin");
    let code = `analog(${dropdown_CH})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript["IN_MyESP32"] = function(block) {
    let dropdown_CH = block.getFieldValue("pin");
    let code = `in(${dropdown_CH})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript["IN_PULLUP_MyESP32"] = function(block) {
    let dropdown_CH = block.getFieldValue("pin");
    let code = `in_pullup(${dropdown_CH})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript["OUT_MyESP32"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    let code = `out(${dropdown_pin},${dropdown_status});`;
    return code;
  };
  Blockly.JavaScript["Buzzer_MyESP32"] = function(block) {
    let dropdown_status = block.getFieldValue("status");
    let code = `pinMode(19,OUTPUT);\n`;
        code += `digitalWrite(19,${dropdown_status});`;
    return code;
  };
  Blockly.JavaScript['Knob_MyESP32'] = function(block) {  
    var code = '(analogRead(39))';  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["io_pin_dummy_input"] = function(block) {
    let dropdown_name = block.getFieldValue("IO_PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
    Blockly.JavaScript["SW_MyESP32"] = function(block) {
    let dropdown_CH = block.getFieldValue("pin");
    let code = `digitalRead(${dropdown_CH})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

};
