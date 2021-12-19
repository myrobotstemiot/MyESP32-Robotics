#ifndef _ARDUINO_GFX_LIBRARIES_H_
#define _ARDUINO_GFX_LIBRARIES_H_

#include "Arduino_DataBus.h"
#include "databus/Arduino_ESP32SPI.h"
#include "databus/Arduino_HWSPI.h"
#include "databus/Arduino_SWSPI.h"

#include "Arduino_GFX.h" // Core graphics library
#if !defined(LITTLE_FOOT_PRINT)
#include "canvas/Arduino_Canvas.h"
#include "canvas/Arduino_Canvas_Indexed.h"
#include "canvas/Arduino_Canvas_3bit.h"
#include "canvas/Arduino_Canvas_Mono.h"
#include "display/Arduino_ILI9488_3bit.h"
#endif // !defined(LITTLE_FOOT_PRINT)
#include "display/Arduino_ST7735.h"
#include "display/Arduino_ILI9341.h"
#if defined(ESP32)
#define TFT_SCK 18
#define TFT_MOSI 23
#define TFT_MISO -1
#define TFT_CS 5
#define TFT_DC 4
#define TFT_RST -1
#define TFT_BL -1
#else // default pins for ESP32
#define TFT_SCK 18
#define TFT_MOSI 23
#define TFT_MISO -1
#define TFT_CS 5
#define TFT_DC 4
#define TFT_RST -1
#endif

Arduino_DataBus *create_default_Arduino_DataBus();
Arduino_GFX *create_default_Arduino_GFX();

#endif // _ARDUINO_GFX_LIBRARIES_H_
