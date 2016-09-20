# Atid 911n Barcode Plugin
Barcode scanner plugin for cordova. In development.

Currently supported methods:
```
atid.barcode {
  startDecode : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'scanner_startDecode', []);
  	},
  	stopDecode : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'scanner_stopDecode', []);
  	},
  	isDecoding : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'scanner_isDecoding', []);
  	},
  	wakeup : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'wakeup_scanner', []);
  	},
  	sleep : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'sleep_scanner', []);
  	},
  	deinitialize : function(successCallback, errorCallback){
  		exec(successCallback, errorCallback, "Barcode", 'deinitialize_scanner', []);
  	}
}
```

Tested: startDecode, stopDecode, isDecoding. onDecodeEvent in native.

TODO: add in functionality to interface with atid scanner handle using the keyup/keydown events (looking for a way to do this from the javascript side)

TODO: implement asynchronous call from native side to javascript side when onDecodeEvent is called instead of the other way around.

TODO: refactor methods so that callback functions don't have to be explicitly defined by the javascript programmer.

