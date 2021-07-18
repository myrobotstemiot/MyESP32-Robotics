module.exports = {
  name: "MyDisplay",
  index: 0,
  color: "230",
  icon: "/static/icons/icons8_picture_96px_1.png",
  blocks: [
    {
        xml: `<sep gap="32"></sep><label text="หน้าจอ TFT" web-class="headline"></label>`
    },
    "TFT_setRotation",
    /*{
      xml:
        `<block type="TFT_setCursor">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                    </block>`
    },*/
    "TFT_fillScreen",
    {
      xml:
        `<block type="TFT_println">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>

                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawPixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawRect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="w">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="h">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value> 
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillRect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="w">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="h">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value> 
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawCircle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillCircle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawTriangle">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>  
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillTriangle">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>  
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        
                    </block>`
    },
    {
        xml: `<sep gap="32"></sep><label text="หน้าจอ OLED" web-class="headline"></label>`
    },
    "OLED_display_clear",
    "OLED_display_display",
    {
      xml:
        `<block type="OLED_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="OLED_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="OLED_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="OLED_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="OLED_display_draw_progress_bar">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                        <value name="progress">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="OLED_display_draw_pixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>    
                    </block>`
    },
    // {
    //   xml:
    //     `<block type="OLED_display_string_width">
    //                     <value name="text">
    //                         <shadow type="basic_string">
    //                             <field name="VALUE">Hello world!</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    "OLED_display_width",
    "OLED_display_height",
    "basic_string"
  ]
};
