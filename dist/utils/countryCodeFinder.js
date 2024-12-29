"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getCountryCodeByCurrency;
// Define the type for the utility function
function getCountryCodeByCurrency(currencyCode) {
    // Country to currency data
    const countryCurrencyData = [
        { countryCode: "AF", currencyCode: "AFN" },
        { countryCode: "AL", currencyCode: "ALL" },
        { countryCode: "DZ", currencyCode: "DZD" },
        { countryCode: "AS", currencyCode: "USD" },
        { countryCode: "AD", currencyCode: "EUR" },
        { countryCode: "AO", currencyCode: "AOA" },
        { countryCode: "AI", currencyCode: "XCD" },
        { countryCode: "AG", currencyCode: "XCD" },
        { countryCode: "AR", currencyCode: "ARS" },
        { countryCode: "AM", currencyCode: "AMD" },
        { countryCode: "AU", currencyCode: "AUD" },
        { countryCode: "AT", currencyCode: "EUR" },
        { countryCode: "AZ", currencyCode: "AZN" },
        { countryCode: "BS", currencyCode: "BSD" },
        { countryCode: "BH", currencyCode: "BHD" },
        { countryCode: "BD", currencyCode: "BDT" },
        { countryCode: "BB", currencyCode: "BBD" },
        { countryCode: "BY", currencyCode: "BYN" },
        { countryCode: "BE", currencyCode: "EUR" },
        { countryCode: "BZ", currencyCode: "BZD" },
        { countryCode: "BJ", currencyCode: "XOF" },
        { countryCode: "BM", currencyCode: "BMD" },
        { countryCode: "BT", currencyCode: "BTN" },
        { countryCode: "BO", currencyCode: "BOB" },
        { countryCode: "BA", currencyCode: "BAM" },
        { countryCode: "BW", currencyCode: "BWP" },
        { countryCode: "BR", currencyCode: "BRL" },
        { countryCode: "BN", currencyCode: "BND" },
        { countryCode: "BG", currencyCode: "BGN" },
        { countryCode: "BF", currencyCode: "XOF" },
        { countryCode: "BI", currencyCode: "BIF" },
        { countryCode: "KH", currencyCode: "KHR" },
        { countryCode: "CM", currencyCode: "XAF" },
        { countryCode: "CA", currencyCode: "CAD" },
        { countryCode: "CV", currencyCode: "CVE" },
        { countryCode: "KY", currencyCode: "KYD" },
        { countryCode: "CF", currencyCode: "XAF" },
        { countryCode: "TD", currencyCode: "XAF" },
        { countryCode: "CL", currencyCode: "CLP" },
        { countryCode: "CN", currencyCode: "CNY" },
        { countryCode: "CO", currencyCode: "COP" },
        { countryCode: "KM", currencyCode: "KMF" },
        { countryCode: "CD", currencyCode: "CDF" },
        { countryCode: "CG", currencyCode: "XAF" },
        { countryCode: "CR", currencyCode: "CRC" },
        { countryCode: "HR", currencyCode: "EUR" },
        { countryCode: "CU", currencyCode: "CUP" },
        { countryCode: "CY", currencyCode: "EUR" },
        { countryCode: "CZ", currencyCode: "CZK" },
        { countryCode: "DK", currencyCode: "DKK" },
        { countryCode: "DJ", currencyCode: "DJF" },
        { countryCode: "DM", currencyCode: "XCD" },
        { countryCode: "DO", currencyCode: "DOP" },
        { countryCode: "EC", currencyCode: "USD" },
        { countryCode: "EG", currencyCode: "EGP" },
        { countryCode: "SV", currencyCode: "USD" },
        { countryCode: "GQ", currencyCode: "XAF" },
        { countryCode: "ER", currencyCode: "ERN" },
        { countryCode: "EE", currencyCode: "EUR" },
        { countryCode: "SZ", currencyCode: "SZL" },
        { countryCode: "ET", currencyCode: "ETB" },
        { countryCode: "FJ", currencyCode: "FJD" },
        { countryCode: "FI", currencyCode: "EUR" },
        { countryCode: "FR", currencyCode: "EUR" },
        { countryCode: "GA", currencyCode: "XAF" },
        { countryCode: "GM", currencyCode: "GMD" },
        { countryCode: "GE", currencyCode: "GEL" },
        { countryCode: "DE", currencyCode: "EUR" },
        { countryCode: "GH", currencyCode: "GHS" },
        { countryCode: "GR", currencyCode: "EUR" },
        { countryCode: "GD", currencyCode: "XCD" },
        { countryCode: "GT", currencyCode: "GTQ" },
        { countryCode: "GN", currencyCode: "GNF" },
        { countryCode: "GW", currencyCode: "XOF" },
        { countryCode: "GY", currencyCode: "GYD" },
        { countryCode: "HT", currencyCode: "HTG" },
        { countryCode: "HN", currencyCode: "HNL" },
        { countryCode: "HU", currencyCode: "HUF" },
        { countryCode: "IS", currencyCode: "ISK" },
        { countryCode: "IN", currencyCode: "INR" },
        { countryCode: "ID", currencyCode: "IDR" },
        { countryCode: "IR", currencyCode: "IRR" },
        { countryCode: "IQ", currencyCode: "IQD" },
        { countryCode: "IE", currencyCode: "EUR" },
        { countryCode: "IL", currencyCode: "ILS" },
        { countryCode: "IT", currencyCode: "EUR" },
        { countryCode: "CI", currencyCode: "XOF" },
        { countryCode: "JM", currencyCode: "JMD" },
        { countryCode: "JP", currencyCode: "JPY" },
        { countryCode: "JO", currencyCode: "JOD" },
        { countryCode: "KZ", currencyCode: "KZT" },
        { countryCode: "KE", currencyCode: "KES" },
        { countryCode: "KI", currencyCode: "AUD" },
        { countryCode: "KR", currencyCode: "KRW" },
        { countryCode: "KW", currencyCode: "KWD" },
        { countryCode: "KG", currencyCode: "KGS" },
        { countryCode: "LA", currencyCode: "LAK" },
        { countryCode: "LV", currencyCode: "EUR" },
        { countryCode: "LB", currencyCode: "LBP" },
        { countryCode: "LS", currencyCode: "LSL" },
        { countryCode: "LR", currencyCode: "LRD" },
        { countryCode: "LY", currencyCode: "LYD" },
        { countryCode: "LI", currencyCode: "CHF" },
        { countryCode: "LT", currencyCode: "EUR" },
        { countryCode: "LU", currencyCode: "EUR" },
        { countryCode: "MG", currencyCode: "MGA" },
        { countryCode: "MW", currencyCode: "MWK" },
        { countryCode: "MY", currencyCode: "MYR" },
        { countryCode: "MV", currencyCode: "MVR" },
        { countryCode: "ML", currencyCode: "XOF" },
        { countryCode: "MT", currencyCode: "EUR" },
        { countryCode: "MH", currencyCode: "USD" },
        { countryCode: "MR", currencyCode: "MRU" },
        { countryCode: "MU", currencyCode: "MUR" },
        { countryCode: "MX", currencyCode: "MXN" },
        { countryCode: "FM", currencyCode: "USD" },
        { countryCode: "MD", currencyCode: "MDL" },
        { countryCode: "MC", currencyCode: "EUR" },
        { countryCode: "MN", currencyCode: "MNT" },
        { countryCode: "ME", currencyCode: "EUR" },
        { countryCode: "MA", currencyCode: "MAD" },
        { countryCode: "MZ", currencyCode: "MZN" },
        { countryCode: "MM", currencyCode: "MMK" },
        { countryCode: "NA", currencyCode: "NAD" },
        { countryCode: "NR", currencyCode: "AUD" },
        { countryCode: "NP", currencyCode: "NPR" },
        { countryCode: "NL", currencyCode: "EUR" },
        { countryCode: "NZ", currencyCode: "NZD" },
        { countryCode: "NI", currencyCode: "NIO" },
        { countryCode: "NE", currencyCode: "XOF" },
        { countryCode: "NG", currencyCode: "NGN" },
        { countryCode: "NO", currencyCode: "NOK" },
        { countryCode: "OM", currencyCode: "OMR" },
        { countryCode: "PK", currencyCode: "PKR" },
        { countryCode: "PW", currencyCode: "USD" },
        { countryCode: "PA", currencyCode: "PAB" },
        { countryCode: "PG", currencyCode: "PGK" },
        { countryCode: "PY", currencyCode: "PYG" },
        { countryCode: "PE", currencyCode: "PEN" },
        { countryCode: "PH", currencyCode: "PHP" },
        { countryCode: "PL", currencyCode: "PLN" },
        { countryCode: "PT", currencyCode: "EUR" },
        { countryCode: "QA", currencyCode: "QAR" },
        { countryCode: "RO", currencyCode: "RON" },
        { countryCode: "RU", currencyCode: "RUB" },
        { countryCode: "RW", currencyCode: "RWF" },
        { countryCode: "KN", currencyCode: "XCD" },
        { countryCode: "LC", currencyCode: "XCD" },
        { countryCode: "VC", currencyCode: "VEC" },
        { countryCode: "WS", currencyCode: "WST" },
        { countryCode: "ST", currencyCode: "STN" },
        { countryCode: "SN", currencyCode: "SEN" },
        { countryCode: "RS", currencyCode: "RSD" },
        { countryCode: "SC", currencyCode: "SCR" },
        { countryCode: "SL", currencyCode: "SLL" },
        { countryCode: "SG", currencyCode: "SGD" },
        { countryCode: "SK", currencyCode: "SKK" },
        { countryCode: "SI", currencyCode: "SIT" },
        { countryCode: "SO", currencyCode: "SOS" },
        { countryCode: "ZA", currencyCode: "ZAR" },
        { countryCode: "KR", currencyCode: "KRW" },
        { countryCode: "SS", currencyCode: "SSP" },
        { countryCode: "ES", currencyCode: "EUR" },
        { countryCode: "LK", currencyCode: "LKR" },
        { countryCode: "SD", currencyCode: "SDG" },
        { countryCode: "SR", currencyCode: "SRD" },
        { countryCode: "SY", currencyCode: "SYP" },
        { countryCode: "TJ", currencyCode: "TJS" },
        { countryCode: "TH", currencyCode: "THB" },
        { countryCode: "TG", currencyCode: "CFA" },
        { countryCode: "TZ", currencyCode: "TZS" },
        { countryCode: "TO", currencyCode: "TOP" },
        { countryCode: "TR", currencyCode: "TRY" },
        { countryCode: "TT", currencyCode: "TTD" },
        { countryCode: "TN", currencyCode: "TND" },
        { countryCode: "TM", currencyCode: "TMT" },
        { countryCode: "UG", currencyCode: "UGX" },
        { countryCode: "UA", currencyCode: "UAH" },
        { countryCode: "AE", currencyCode: "AED" },
        { countryCode: "GB", currencyCode: "GBP" },
        { countryCode: "US", currencyCode: "USD" },
        { countryCode: "UY", currencyCode: "UYU" },
        { countryCode: "UZ", currencyCode: "UZS" },
        { countryCode: "VU", currencyCode: "VUV" },
        { countryCode: "VE", currencyCode: "VEF" },
        { countryCode: "VN", currencyCode: "VND" },
        { countryCode: "YE", currencyCode: "YER" },
        { countryCode: "ZM", currencyCode: "ZMK" },
        { countryCode: "ZW", currencyCode: "ZWD" }
    ];
    const foundCountry = countryCurrencyData.find((entry) => entry.currencyCode === currencyCode);
    return foundCountry ? foundCountry.countryCode : null;
}
