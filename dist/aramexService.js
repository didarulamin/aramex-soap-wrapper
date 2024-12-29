"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOfficesByCountry = exports.fetchCitiesByCountry = exports.fetchAllCountries = exports.validateAddress = exports.printShipmentLabel = exports.trackShipments = exports.createShipment = void 0;
const moment_1 = __importDefault(require("moment"));
const aramexConfig_1 = require("./aramexConfig");
const countryCodeFinder_1 = __importDefault(require("./utils/countryCodeFinder"));
const helper_1 = require("./utils/helper");
const path_1 = __importDefault(require("path"));
// Create shipment
const createShipment = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo, shipperDetails } = (0, aramexConfig_1.getAramexConfig)();
        // Dynamically update Reference1 in shipperDetails
        const updatedShipperDetails = Object.assign(Object.assign({}, shipperDetails), { Reference1: `${order.id}` // Set Reference1 dynamically from order.id
         });
        // const wsdlPath = path.resolve(__dirname, 'wsdl/shipping.wsdl');
        const wsdlPath = 'https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc?wsdl';
        const consignee = (0, helper_1.generateConsignee)(order);
        console.log(consignee);
        const shipmentDetails = (0, helper_1.generateShipmentDetails)(order);
        console.log(shipmentDetails);
        const ThirdParty = (0, helper_1.generateThirdParty)(order);
        console.log(ThirdParty);
        const payload = {
            ShipmentCreationRequest: {
                ClientInfo: clientInfo,
                Shipments: {
                    Shipment: {
                        Shipper: updatedShipperDetails,
                        Consignee: consignee,
                        ThirdParty: ThirdParty,
                        Reference1: `${order.id}`,
                        Reference2: '',
                        Reference3: '',
                        ForeignHAWB: '',
                        TransportType: 0,
                        ShippingDateTime: (0, moment_1.default)().format(),
                        // DueDate: moment().format(),
                        PickupLocation: 'Reciption',
                        PickupGUID: '',
                        Comments: '',
                        AccountingInstrcutions: '',
                        OperationsInstructions: '',
                        Details: shipmentDetails
                    }
                },
                Transaction: null
            }
        };
        // console.log(JSON.stringify(payload))
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'CreateShipments', payload);
    }
    catch (error) {
        console.error('Error creating shipment:', error);
        throw error;
    }
});
exports.createShipment = createShipment;
// Track shipments
const trackShipments = (shipments) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        const wsdlPath = path_1.default.resolve(__dirname, 'wsdl/tracking.wsdl');
        const payload = {
            ShipmentTrackingRequest: {
                ClientInfo: clientInfo,
                Shipments: { string: shipments },
            },
        };
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'TrackShipments', payload);
    }
    catch (error) {
        console.error('Error tracking shipments:', error);
        throw error;
    }
});
exports.trackShipments = trackShipments;
// Print shipment label
const printShipmentLabel = (shipmentNumber) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        const wsdlPath = path_1.default.resolve(__dirname, 'wsdl/shipping.wsdl');
        // const wsdlPath = 'https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc?wsdl'
        const payload = {
            LabelPrintingRequest: {
                ClientInfo: clientInfo,
                ShipmentNumber: shipmentNumber,
                LabelInfo: {
                    ReportID: '9729',
                    ReportType: 'URL',
                },
            },
        };
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'PrintLabel', payload);
    }
    catch (error) {
        console.error('Error printing shipment label:', error);
        throw error;
    }
});
exports.printShipmentLabel = printShipmentLabel;
const validateAddress = (order) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const address = {
        Line1: ((_b = (_a = order === null || order === void 0 ? void 0 : order.shipping) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.street) || '',
        Line2: ((_d = (_c = order === null || order === void 0 ? void 0 : order.shipping) === null || _c === void 0 ? void 0 : _c.address) === null || _d === void 0 ? void 0 : _d.district) || '',
        Line3: ((_f = (_e = order === null || order === void 0 ? void 0 : order.shipping) === null || _e === void 0 ? void 0 : _e.address) === null || _f === void 0 ? void 0 : _f.formatted_address) || '',
        City: ((_j = (_h = (_g = order === null || order === void 0 ? void 0 : order.shipping) === null || _g === void 0 ? void 0 : _g.address) === null || _h === void 0 ? void 0 : _h.city) === null || _j === void 0 ? void 0 : _j.name) || '',
        StateOrProvinceCode: ((_l = (_k = order === null || order === void 0 ? void 0 : order.shipping) === null || _k === void 0 ? void 0 : _k.address) === null || _l === void 0 ? void 0 : _l.state) || '',
        PostCode: ((_o = (_m = order === null || order === void 0 ? void 0 : order.shipping) === null || _m === void 0 ? void 0 : _m.address) === null || _o === void 0 ? void 0 : _o.postal_code) || '00000',
        CountryCode: (0, countryCodeFinder_1.default)(order === null || order === void 0 ? void 0 : order.currency_code) || 'SA' // Default to 'SA'
    };
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        // const wsdlPath = path.resolve(__dirname, 'wsdl/location.wsdl');
        const wsdlPath = 'https://ws.aramex.net/ShippingAPI/Location/Service_1_0.svc?wsdl';
        // Construct address payload from the order
        const payload = {
            AddressValidationRequest: {
                ClientInfo: clientInfo,
                Address: address,
                Transaction: null
            },
        };
        // Dispatch the SOAP request
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'ValidateAddress', payload);
    }
    catch (error) {
        console.error('Error validating address:', error);
        throw error;
    }
});
exports.validateAddress = validateAddress;
const fetchAllCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        const wsdlPath = path_1.default.resolve(__dirname, 'wsdl/location.wsdl');
        // const wsdlPath = 'https://ws.aramex.net/ShippingAPI/Location/Service_1_0.svc?wsdl'
        const payload = {
            CountriesFetchingRequest: {
                ClientInfo: clientInfo,
                Transaction: {
                    Reference1: 'FetchCountries',
                    Reference2: '',
                    Reference3: '',
                    Reference4: '',
                    Reference5: '',
                },
            },
        };
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'FetchCountries', payload);
    }
    catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
});
exports.fetchAllCountries = fetchAllCountries;
const fetchCitiesByCountry = (countryCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        const wsdlPath = path_1.default.resolve(__dirname, 'wsdl/location.wsdl');
        // const wsdlPath = 'https://ws.aramex.net/ShippingAPI/Location/Service_1_0.svc?wsdl'
        const payload = {
            CitiesFetchingRequest: {
                ClientInfo: clientInfo,
                Transaction: {
                    Reference1: 'FetchCities',
                    Reference2: '',
                    Reference3: '',
                    Reference4: '',
                    Reference5: '',
                },
                CountryCode: countryCode,
                State: '', // Optional if you need to fetch cities for a specific state
                NameStartsWith: '', // Optional: filter cities starting with specific characters
            },
        };
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'FetchCities', payload);
    }
    catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
});
exports.fetchCitiesByCountry = fetchCitiesByCountry;
const fetchOfficesByCountry = (countryCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientInfo } = (0, aramexConfig_1.getAramexConfig)();
        const wsdlPath = path_1.default.resolve(__dirname, 'wsdl/location.wsdl');
        // const wsdlPath = 'https://ws.aramex.net/ShippingAPI/Location/Service_1_0.svc?wsdl'
        const payload = {
            OfficesFetchingRequest: {
                ClientInfo: clientInfo,
                Transaction: {
                    Reference1: 'FetchOffices',
                    Reference2: '',
                    Reference3: '',
                    Reference4: '',
                    Reference5: '',
                },
                CountryCode: countryCode,
            },
        };
        return yield (0, helper_1.dispatchSoapRequest)(wsdlPath, 'FetchOffices', payload);
    }
    catch (error) {
        console.error('Error fetching offices:', error);
        throw error;
    }
});
exports.fetchOfficesByCountry = fetchOfficesByCountry;
