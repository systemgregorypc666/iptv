(function($) {
    /**
     * Catalan language package
     * Translated by @ArnauAregall
     */
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        'ca_ES': {
            base64: {
                'default': 'Si us plau introdueix un valor vÃ lid en base 64'
            },
            between: {
                'default': 'Si us plau introdueix un valor entre %s i %s',
                notInclusive: 'Si us plau introdueix un valor comprÃ¨s entre %s i %s'
            },
            bic: {
                'default': 'Si us plau introdueix un nombre BIC vÃ lid'
            },
            callback: {
                'default': 'Si us plau introdueix un valor vÃ lid'
            },
            choice: {
                'default': 'Si us plau introdueix un valor vÃ lid',
                less: 'Si us plau escull %s opcions com a mÃ­nim',
                more: 'Si us plau escull %s opcions com a mÃ xim',
                between: 'Si us plau escull entre %s i %s opcions'
            },
            color: {
                'default': 'Si us plau introdueix un color vÃ lid'
            },
            creditCard: {
                'default': 'Si us plau introdueix un nombre vÃ lid de targeta de crÃ¨dit'
            },
            cusip: {
                'default': 'Si us plau introdueix un nombre CUSIP vÃ lid'
            },
            cvv: {
                'default': 'Si us plau introdueix un nombre CVV vÃ lid'
            },
            date: {
                'default': 'Si us plau introdueix una data vÃ lida',
                min: 'Si us plau introdueix una data posterior a %s',
                max: 'Si us plau introdueix una data anterior %s',
                range: 'Si us plau introdueix una data compresa entre %s i %s'
            },
            different: {
                'default': 'Si us plau introdueix un valor diferent'
            },
            digits: {
                'default': 'Si us plau introdueix nomÃ©s dÃ­gits'
            },
            ean: {
                'default': 'Si us plau introdueix un nombre EAN vÃ lid'
            },
            ein: {
                'default': 'Si us plau introdueix un nombre EIN vÃ lid'
            },
            emailAddress: {
                'default': 'Si us plau introdueix una adreÃ§a electrÃ²nica vÃ lida'
            },
            file: {
                'default': 'Si us plau selecciona un arxiu vÃ lid'
            },
            greaterThan: {
                'default': 'Si us plau introdueix un valor mÃ©s gran o igual a %s',
                notInclusive: 'Si us plau introdueix un valor mÃ©s gran que %s'
            },
            grid: {
                'default': 'Si us plau introdueix un nombre GRId vÃ lid'
            },
            hex: {
                'default': 'Si us plau introdueix un valor hexadecimal vÃ lid'
            },
            iban: {
                'default': 'Si us plau introdueix un nombre IBAN vÃ lid',
                country: 'Si us plau introdueix un nombre IBAN vÃ lid a %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'Emirats Ã€rabs Units',
                    AL: 'AlbÃ nia',
                    AO: 'Angola',
                    AT: 'Ã€ustria',
                    AZ: 'Azerbaidjan',
                    BA: 'BÃ²snia i Hercegovina',
                    BE: 'BÃ¨lgica',
                    BF: 'Burkina Faso',
                    BG: 'BulgÃ ria',
                    BH: 'Bahrain',
                    BI: 'Burundi',
                    BJ: 'BenÃ­n',
                    BR: 'Brasil',
                    CH: 'SuÃ¯ssa',
                    CI: 'Costa d\'Ivori',
                    CM: 'Camerun',
                    CR: 'Costa Rica',
                    CV: 'Cap Verd',
                    CY: 'Xipre',
                    CZ: 'RepÃºblica Txeca',
                    DE: 'Alemanya',
                    DK: 'Dinamarca',
                    DO: 'RepÃºblica Dominicana',
                    DZ: 'AlgÃ¨ria',
                    EE: 'EstÃ²nia',
                    ES: 'Espanya',
                    FI: 'FinlÃ ndia',
                    FO: 'Illes FÃ¨roe',
                    FR: 'FranÃ§a',
                    GB: 'Regne Unit',
                    GE: 'GeÃ²rgia',
                    GI: 'Gibraltar',
                    GL: 'GrenlÃ ndia',
                    GR: 'GrÃ¨cia',
                    GT: 'Guatemala',
                    HR: 'CroÃ cia',
                    HU: 'Hongria',
                    IE: 'Irlanda',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'IslÃ ndia',
                    IT: 'ItÃ lia',
                    JO: 'JordÃ nia',
                    KW: 'Kuwait',
                    KZ: 'KazajistÃ¡n',
                    LB: 'LÃ­ban',
                    LI: 'Liechtenstein',
                    LT: 'LituÃ nia',
                    LU: 'Luxemburg',
                    LV: 'LetÃ²nia',
                    MC: 'MÃ²naco',
                    MD: 'MoldÃ via',
                    ME: 'Montenegro',
                    MG: 'Madagascar',
                    MK: 'MacedÃ²nia',
                    ML: 'Malo',
                    MR: 'MauritÃ nia',
                    MT: 'Malta',
                    MU: 'Maurici',
                    MZ: 'MoÃ§ambic',
                    NL: 'PaÃ¯sos Baixos',
                    NO: 'Noruega',
                    PK: 'Pakistan',
                    PL: 'PolÃ²nia',
                    PS: 'Palestina',
                    PT: 'Portugal',
                    QA: 'Qatar',
                    RO: 'Romania',
                    RS: 'SÃ¨rbia',
                    SA: 'ArÃ bia Saudita',
                    SE: 'SuÃ¨cia',
                    SI: 'EslovÃ¨nia',
                    SK: 'EslovÃ quia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TL: 'Timor Oriental',
                    TN: 'TunÃ­sia',
                    TR: 'Turquia',
                    VG: 'Illes Verges BritÃ niques',
                    XK: 'RepÃºblica de Kosovo'
                }
            },
            id: {
                'default': 'Si us plau introdueix un nombre d\'identificaciÃ³ vÃ lid',
                country: 'Si us plau introdueix un nombre d\'identificaciÃ³ vÃ lid a %s',
                countries: {
                    BA: 'BÃ²snia i Hercegovina',
                    BG: 'BulgÃ ria',
                    BR: 'Brasil',
                    CH: 'SuÃ¯ssa',
                    CL: 'Xile',
                    CN: 'Xina',
                    CZ: 'RepÃºblica Checa',
                    DK: 'Dinamarca',
                    EE: 'EstÃ²nia',
                    ES: 'Espanya',
                    FI: 'Finlpandia',
                    HR: 'CropÃ cia',
                    IE: 'Irlanda',
                    IS: 'IslÃ ndia',
                    LT: 'Lituania',
                    LV: 'LetÃ²nia',
                    ME: 'Montenegro',
                    MK: 'MacedÃ²nia',
                    NL: 'PaÃ¯sos Baixos',
                    PL: 'PolÃ²nia',
                    RO: 'Romania',
                    RS: 'SÃ¨rbia',
                    SE: 'SuÃ¨cia',
                    SI: 'EslovÃ¨nia',
                    SK: 'EslovÃ quia',
                    SM: 'San Marino',
                    TH: 'TailÃ ndia',
                    ZA: 'Sud-Ã frica'
                }
            },
            identical: {
                'default': 'Si us plau introdueix exactament el mateix valor'
            },
            imei: {
                'default': 'Si us plau introdueix un nombre IMEI vÃ lid'
            },
            imo: {
                'default': 'Si us plau introdueix un nombre IMO vÃ lid'
            },
            integer: {
                'default': 'Si us plau introdueix un nombre vÃ lid'
            },
            ip: {
                'default': 'Si us plau introdueix una direcciÃ³ IP vÃ lida',
                ipv4: 'Si us plau introdueix una direcciÃ³ IPV4 vÃ lida',
                ipv6: 'Si us plau introdueix una direcciÃ³ IPV6 vÃ lida'
            },
            isbn: {
                'default': 'Si us plau introdueix un nombre ISBN vÃ lid'
            },
            isin: {
                'default': 'Si us plau introdueix un nombre ISIN vÃ lid'
            },
            ismn: {
                'default': 'Si us plau introdueix un nombre ISMN vÃ lid'
            },
            issn: {
                'default': 'Si us plau introdueix un nombre ISSN vÃ lid'
            },
            lessThan: {
                'default': 'Si us plau introdueix un valor menor o igual a %s',
                notInclusive: 'Si us plau introdueix un valor menor que %s'
            },
            mac: {
                'default': 'Si us plau introdueix una adreÃ§a MAC vÃ lida'
            },
            meid: {
                'default': 'Si us plau introdueix nombre MEID vÃ lid'
            },
            notEmpty: {
                'default': 'Si us plau introdueix un valor'
            },
            numeric: {
                'default': 'Si us plau introdueix un nombre decimal vÃ lid'
            },
            phone: {
                'default': 'Si us plau introdueix un telÃ¨fon vÃ lid',
                country: 'Si us plau introdueix un telÃ¨fon vÃ lid a %s',
                countries: {
                    AE: 'Emirats Ã€rabs Units',
                    BG: 'BulgÃ ria',
                    BR: 'Brasil',
                    CN: 'Xina',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemanya',
                    DK: 'Dinamarca',
                    ES: 'Espanya',
                    FR: 'FranÃ§a',
                    GB: 'Regne Unit',
                    IN: 'Ãndia',
                    MA: 'Marroc',
                    NL: 'PaÃ¯sos Baixos',
                    PK: 'Pakistan',
                    RO: 'Romania',
                    RU: 'RÃºssia',
                    SK: 'EslovÃ quia',
                    TH: 'TailÃ ndia',
                    US: 'Estats Units',
                    VE: 'VeneÃ§uela'
                }
            },
            promise: {
                'default': 'Si us plau introdueix un valor vÃ lid'
            },
            regexp: {
                'default': 'Si us plau introdueix un valor que coincideixi amb el patrÃ³'
            },
            remote: {
                'default': 'Si us plau introdueix un valor vÃ lid'
            },
            rtn: {
                'default': 'Si us plau introdueix un nombre RTN vÃ lid'
            },
            sedol: {
                'default': 'Si us plau introdueix un nombre SEDOL vÃ lid'
            },
            siren: {
                'default': 'Si us plau introdueix un nombre SIREN vÃ lid'
            },
            siret: {
                'default': 'Si us plau introdueix un nombre SIRET vÃ lid'
            },
            step: {
                'default': 'Si us plau introdueix un pas vÃ lid de %s'
            },
            stringCase: {
                'default': 'Si us plau introdueix nomÃ©s carÃ cters en minÃºscula',
                upper: 'Si us plau introdueix nomÃ©s carÃ cters en majÃºscula'
            },
            stringLength: {
                'default': 'Si us plau introdueix un valor amb una longitud vÃ lida',
                less: 'Si us plau introdueix menys de %s carÃ cters',
                more: 'Si us plau introdueix mÃ©s de %s carÃ cters',
                between: 'Si us plau introdueix un valor amb una longitud compresa entre %s i %s carÃ cters'
            },
            uri: {
                'default': 'Si us plau introdueix una URI vÃ lida'
            },
            uuid: {
                'default': 'Si us plau introdueix un nom UUID vÃ lid',
                version: 'Si us plau introdueix una versiÃ³ UUID vÃ lida per %s'
            },
            vat: {
                'default': 'Si us plau introdueix una quantitat d\'IVA vÃ lida',
                country: 'Si us plau introdueix una quantitat d\' IVA vÃ lida a %s',
                countries: {
                    AT: 'Ã€ustria',
                    BE: 'BÃ¨lgica',
                    BG: 'BulgÃ ria',
                    BR: 'Brasil',
                    CH: 'SuÃ¯ssa',
                    CY: 'Xipre',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemanya',
                    DK: 'Dinamarca',
                    EE: 'EstÃ²nia',
                    ES: 'Espanya',
                    FI: 'FinlÃ ndia',
                    FR: 'FranÃ§a',
                    GB: 'Regne Unit',
                    GR: 'GrÃ¨cia',
                    EL: 'GrÃ¨cia',
                    HU: 'Hongria',
                    HR: 'CroÃ cia',
                    IE: 'Irlanda',
                    IS: 'IslÃ ndia',
                    IT: 'ItÃ lia',
                    LT: 'LituÃ nia',
                    LU: 'Luxemburg',
                    LV: 'LetÃ²nia',
                    MT: 'Malta',
                    NL: 'PaÃ¯sos Baixos',
                    NO: 'Noruega',
                    PL: 'PolÃ²nia',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'RÃºssia',
                    RS: 'SÃ¨rbia',
                    SE: 'SuÃ¨cia',
                    SI: 'EslovÃ¨nia',
                    SK: 'EslovÃ quia',
                    VE: 'VeneÃ§uela',
                    ZA: 'Sud-Ã frica'
                }
            },
            vin: {
                'default': 'Si us plau introdueix un nombre VIN vÃ lid'
            },
            zipCode: {
                'default': 'Si us plau introdueix un codi postal vÃ lid',
                country: 'Si us plau introdueix un codi postal vÃ lid a %s',
                countries: {
                    AT: 'Ã€ustria',
                    BG: 'BulgÃ ria',
                    BR: 'Brasil',
                    CA: 'CanadÃ ',
                    CH: 'SuÃ¯ssa',
                    CZ: 'RepÃºblica Checa',
                    DE: 'Alemanya',
                    DK: 'Dinamarca',
                    ES: 'Espanya',
                    FR: 'FranÃ§a',
                    GB: 'Rege Unit',
                    IE: 'Irlanda',
                    IN: 'Ãndia',
                    IT: 'ItÃ lia',
                    MA: 'Marroc',
                    NL: 'PaÃ¯sos Baixos',
                    PL: 'PolÃ²nia',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'RÃºssia',
                    SE: 'SuÃ¨cia',
                    SG: 'Singapur',
                    SK: 'EslovÃ quia',
                    US: 'Estats Units'
                }
            }
        }
    });
}(jQuery));
