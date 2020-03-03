// Type definitions for Apache Cordova CieloMobile plugin
// Project: https://github.com/sydneigomes/cordova-plugin-cielomobile
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Navigator {
    /**
     * This plugin provides an API for taking pictures and for choosing images from the system's image library.
     */
    androidCieloMobile: AndroidCieloMobile;
}

/**
 * This plugin provides an API for taking pictures and for choosing images from the system's image library.
 */
interface AndroidCieloMobile {
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery.
     * @param cielomobileSuccess Success callback, that get the image
     * as a base64-encoded String, or as the URI for the image file.
     * @param cielomobileError Error callback, that get an error message.
     * @param cielomobileOptions Optional parameters to customize the camera settings.
     */
    receberPagamento(
        cielomobileSuccess: (data: string) => void,
        cielomobileError: (message: string) => void,
        cielomobileOptions?: CieloMobileOptions): void;
}

interface CieloMobileOptions {
    urlCallBack?: string;
    ValorOperacao?: string;
    CodigoOperacao?: string;
    NomePlano?: string;
    EmailCliente?: string;
}

declare var AndroidCieloMobile: {
};
