"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const aramexSetup_1 = require("./aramexSetup");
const aramexConfig_1 = require("./aramexConfig");
const countryCodeFinder_1 = __importDefault(require("./utils/countryCodeFinder"));
const aramexService_1 = require("./aramexService");
exports.default = {
    initializeAramex: aramexSetup_1.initializeAramex,
    configureAramex: aramexConfig_1.configureAramex,
    getAramexConfig: aramexConfig_1.getAramexConfig,
    getCountryCodeByCurrency: countryCodeFinder_1.default,
    createShipment: aramexService_1.createShipment,
    trackShipments: aramexService_1.trackShipments,
    printShipmentLabel: aramexService_1.printShipmentLabel,
    validateAddress: aramexService_1.validateAddress,
    fetchAllCountries: aramexService_1.fetchAllCountries,
    fetchCitiesByCountry: aramexService_1.fetchCitiesByCountry,
    fetchOfficesByCountry: aramexService_1.fetchOfficesByCountry,
};
