#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SSD1306Wire.h"
#include "SH1106.h"
#include "MyESP32.h"


//SSD1306Wire display(0x3c, 21, 22);
${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
	MyESP32();
    display.init();

    display.flipScreenVertically();
    display.setFont(ArialMT_Plain_10);
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
