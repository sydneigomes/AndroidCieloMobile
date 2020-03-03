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
    CieloMobile: CieloMobile;
}

interface CieloMobileOptions {
    urlCallBack?: string;
    ValorOperacao?: string;
    CodigoOperacao?: string;
    NomePlano?: string;
    EmailCliente?: string;
}

interface CieloMobile {
    receberPagamento(cielomobileSuccess: (data: string) => void, cielomobileError: (message: string) => void, cielomobileOptions?: CieloMobileOptions): void;
}

declare var CieloMobile: {
};
