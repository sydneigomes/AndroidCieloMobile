var AndroidCieloMobileLoader = function(require, exports, module) {
    var exec = require('cordova/exec');
  
    var intervalId;
    
    function AndroidCieloMobile() {}
  
    AndroidCieloMobile.prototype.pagar = function(success, failure, params) {
        // register the accelerometer listener
        exec(success, failure, 'AndroidCieloMobile', 'pagar', params);
    };
    
    var androidCieloMobile = new AndroidCieloMobile();
    module.exports = androidCieloMobile;
};

AndroidCieloMobileLoader(require, exports, module);

cordova.define("cordova/plugin/AndroidCieloMobile", AndroidCieloMobileLoader);