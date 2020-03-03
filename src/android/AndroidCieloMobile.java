package br.com.bitpagg;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import android.content.Context;
import android.widget.Toast;

public class AndroidToast extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray listaArgs, CallbackContext callbackContext) throws JSONException {
        if ("Payment".equals(action)) {
            Payment(listaArgs, callbackContext);
            return true;
        }

        return false;
    }

    private void Payment(JSONArray listaArgs, CallbackContext callbackContext) {
        if (listaArgs == null || listaArgs.length() == 0) {
            callbackContext.error("Parâmetros de entrada incorretos!");
        } else if (listaArgs[0] == "" || listaArgs[1] == "" || listaArgs[2] == "" || listaArgs[3] == "" || listaArgs[4] == "" || listaArgs[5] == "") {
            callbackContext.error("Parâmetros de entrada inválidos!");
        } else {
            // Uri packageName = Uri.parse("cielomobile://pagar?urlCallback=pagamentoprestamista://MainActivity");
            Uri packageName = Uri.parse("cielomobile://pagar?urlCallback=" + listaArgs[5]);
            Intent intent = new Intent(Intent.ACTION_VIEW, packageName);
            String msgExtra = "{\"valor\":\"" + listaArgs[1] + "\", ";
            msgExtra += "\"idTransacao\":\"" + listaArgs[0] + "\", ";
            msgExtra += "\"nomeAplicacao\":\"" + listaArgs[2] + "\", ";
            msgExtra += "\"tipoProdutoAdministrativo\":\"false\", ";
            msgExtra += "\"referencia\":\"" + listaArgs[3] + "\", ";
            msgExtra += "\"email\":\"" + listaArgs[4] + "\"}";
            Log.d("DEBUG", "JSON = " + msgExtra);
            intent.putExtra("MENSAGEM", msgExtra);
            startActivityForResult(intent, PAGAMENTO_REQUEST);
            callbackContext.success(msg);
        }
    }
}