// index.ts
import { initializeAramex } from './aramexSetup';
import { configureAramex, getAramexConfig } from './aramexConfig';
import getCountryCodeByCurrency from './utils/countryCodeFinder';
import { createShipment, fetchAllCountries, fetchCitiesByCountry, fetchOfficesByCountry, printShipmentLabel, trackShipments, validateAddress } from './aramexService';



export default {
    initializeAramex,
    configureAramex,
    getAramexConfig,
    getCountryCodeByCurrency,
    createShipment,
    trackShipments,
    printShipmentLabel,
    validateAddress,
    fetchAllCountries,
    fetchCitiesByCountry,
    fetchOfficesByCountry,
    

};

