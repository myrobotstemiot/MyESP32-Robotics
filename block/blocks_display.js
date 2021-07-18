const app = require("electron").remote;
const nativeImage = require("electron").nativeImage;
const dialog = app.dialog;


const dirIcon = Vue.prototype.$global.board.board_info.dir;


module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["OLED_display_clear"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OLED_clear display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("clear display");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_display"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OLED_display Show");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("display everything to screen");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_print"] = {
    init: function() {
      this.appendValueInput("text")
        .appendField("OLED_display text");
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendDummyInput()
        .appendField(")  font")
        .appendField(new Blockly.FieldDropdown([
          [
            "Arial_MT_10pt",
            "ArialMT_Plain_10"
          ],
          ["Arial_MT_16pt", "ArialMT_Plain_16"],
          ["Arial_MT_24pt", "ArialMT_Plain_24"]
        ]), "font");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("display string at x,y");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_line"] = {
    init: function() {
      this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("OLED_draw line from (X");
      this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(")  to  (X");
      this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(",Y");
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("draw line from (x0,y0) to (x1,y1)");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_rect"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("OLED_draw rectangle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(")  width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField(" height");
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("draw rectangle to display");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_circle"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("OLED_draw circle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("r")
        .setCheck("Number")
        .appendField(")  radius");
      this.appendDummyInput()
        .appendField(" fill")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("draw circle on screen");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_progress_bar"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("OLED_draw progress bar at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(")  width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField("  height");
      this.appendValueInput("progress")
        .setCheck("Number")
        .appendField("  progress");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("draw progress bar on the screen");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_pixel"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("OLED_set pixel (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendDummyInput()
        .appendField(")  white color")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_string_width"] = {
    init: function() {
      this.appendValueInput("text")
        .setCheck("String")
        .appendField("OLED_get pixel width of string");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("get pixel width from given string");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_width"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OLED_get screen width");
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("get screen size width in pixel");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_height"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OLED_get screen height");
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("get display screen height in pixel");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_setCursor"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_set pixel (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['TFT_fillScreen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TFT_fillScreen")
    this.appendDummyInput()
        .appendField("Color:")
        .appendField(new Blockly.FieldColour("#0x0000"), "color");
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_println"] = {
    init: function() {
      this.appendValueInput("text")
        .appendField("TFT_display text");
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField(" X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendDummyInput()
        .appendField("Size")
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],]), "Size");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("display string at x,y");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_setRotation"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("TFT_setRotation")
        .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"]]), "Rotation");
      this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_drawPixel"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_drawPixel (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_drawRect"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_drawRect (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("w")
        .setCheck("Number")
        .appendField(",W");
      this.appendValueInput("h")
        .setCheck("Number")
        .appendField(",H");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_fillRect"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_fillRect (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("w")
        .setCheck("Number")
        .appendField(",W");
      this.appendValueInput("h")
        .setCheck("Number")
        .appendField(",H");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_drawCircle"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_drawCircle (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("r")
        .setCheck("Number")
        .appendField(",R");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_fillCircle"] = {
    init: function() {
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("TFT_fillCircle (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("r")
        .setCheck("Number")
        .appendField(",R");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_drawTriangle"] = {
    init: function() {
      this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("TFT_drawTriangle (X0");
      this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(",Y0");
      this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(",X1");
      this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(",Y1");
      this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(",X2");
      this.appendValueInput("y2")
        .setCheck("Number")
        .appendField(",Y2");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["TFT_fillTriangle"] = {
    init: function() {
      this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("TFT_fillTriangle (X0");
      this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(",Y0");
      this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(",X1");
      this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(",Y1");
      this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(",X2");
      this.appendValueInput("y2")
        .setCheck("Number")
        .appendField(",Y2");
      this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["WHITE","0xFFFF"],["BLACK","0x0000"],["RED","0xF800"],["GREEN","0x07E0"],["BLUE","0x001F"],["CYAN","0x07FF"],["YELLOW","0xFFE0"],["ORANGE","0xFD20"],["PINK","0xFC18"]]), "Color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("set pixel color");
      this.setHelpUrl("");
    }
  };


};
