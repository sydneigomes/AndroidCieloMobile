var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');
var CieloMobile = require('./CieloMibile');
var cielomobileExport = {};

// Tack on the CieloMobile Constants to the base cielomobile plugin.
for (var key in CieloMobile) {
    cielomobileExport[key] = CieloMobile[key];
}

cielomobileExport.receberPagamento = function (successCallback, errorCallback, options) {
    argscheck.checkArgs('fFO', 'Camera.getPicture', arguments);

    var urlCallBack = option.urlCallBack;
    var ValorOperacao = option.ValorOperacao;
    var CodigoOperacao = option.CodigoOperacao;
    var NomePlano = option.NomePlano;
    var EmailCliente = option.EmailCliente;

    var args = [urlCallBack, ValorOperacao, CodigoOperacao, NomePlano, EmailCliente];

    exec(success, failure, 'AndroidCieloMobile', 'pagar', args);
    // XXX: commented out
    // return new CameraPopoverHandle();
};


module.exports = cielomobileExport;
