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
	},
	onDecode : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Barcode", 'register_decode', []);
	},
	onKeyUp : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Barcode", 'register_keyUp', []);
	},
	onKeyDown : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Barcode", 'register_keyDown', []);
	}
}

atid.constants {
  scanner_handle_keycode : 2
}
```

Tested: Everything except wakeup, sleep, and deinitialize.
TODO: For the keydown callback, send json back containing the key event aswell as the keycode.

