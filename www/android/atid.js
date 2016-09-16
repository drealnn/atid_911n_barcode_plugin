var cordova = require('cordova'),
    exec = require('cordova/exec');

module.exports =  {
	echoObject : function(str, callback) {
	    exec(callback, function(err) {
		callback('Nothing to echo.');
	    }, "Barcode", "echo", [str]);
	},
	startDecode : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Barcode", 'scanner_startDecode', []);
	},
	stopDecode : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Barcode", 'scanner_stopDecode', []);
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

};



