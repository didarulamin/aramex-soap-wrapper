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
exports.dispatchSoapRequest = exports.generateThirdParty = exports.generateShipmentDetails = exports.generateConsignee = void 0;
const soap = require('strong-soap').soap;
const xml2js_1 = __importDefault(require("xml2js"));
const countryCodeFinder_1 = __importDefault(require("./countryCodeFinder"));
const generateConsignee = (order) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return ({
        Reference1: `${(order === null || order === void 0 ? void 0 : order.id) || ''}`,
        Reference2: '',
        AccountNumber: '',
        PartyAddress: {
            Line1: ((_b = (_a = order === null || order === void 0 ? void 0 : order.shipping) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.street) || '',
            Line2: ((_d = (_c = order === null || order === void 0 ? void 0 : order.shipping) === null || _c === void 0 ? void 0 : _c.address) === null || _d === void 0 ? void 0 : _d.district) || '',
            Line3: (_f = (_e = order === null || order === void 0 ? void 0 : order.shipping) === null || _e === void 0 ? void 0 : _e.address) === null || _f === void 0 ? void 0 : _f.formatted_address,
            City: ((_j = (_h = (_g = order === null || order === void 0 ? void 0 : order.shipping) === null || _g === void 0 ? void 0 : _g.address) === null || _h === void 0 ? void 0 : _h.city) === null || _j === void 0 ? void 0 : _j.name) || '',
            StateOrProvinceCode: ((_l = (_k = order === null || order === void 0 ? void 0 : order.shipping) === null || _k === void 0 ? void 0 : _k.address) === null || _l === void 0 ? void 0 : _l.state) || '', // Ensure state is populated if available
            PostCode: ((_o = (_m = order === null || order === void 0 ? void 0 : order.shipping) === null || _m === void 0 ? void 0 : _m.address) === null || _o === void 0 ? void 0 : _o.postal_code) || '', // Use a default valid value if missing
            CountryCode: (0, countryCodeFinder_1.default)(order === null || order === void 0 ? void 0 : order.currency_code) || 'SA' // Default to 'SA' if no currency code
        },
        Contact: {
            Department: '',
            PersonName: ((_p = order === null || order === void 0 ? void 0 : order.customer) === null || _p === void 0 ? void 0 : _p.name) || '',
            Title: '',
            CompanyName: (_q = order === null || order === void 0 ? void 0 : order.customer) === null || _q === void 0 ? void 0 : _q.name,
            PhoneNumber1: (_r = order === null || order === void 0 ? void 0 : order.customer) === null || _r === void 0 ? void 0 : _r.mobile, // Provide a default valid phone number
            PhoneNumber1Ext: '',
            PhoneNumber2: '',
            PhoneNumber2Ext: '',
            FaxNumber: '',
            CellPhone: ((_s = order === null || order === void 0 ? void 0 : order.customer) === null || _s === void 0 ? void 0 : _s.mobile) || '', // Provide a default valid phone number
            EmailAddress: ((_t = order === null || order === void 0 ? void 0 : order.customer) === null || _t === void 0 ? void 0 : _t.email) || '', // Provide a default email if missing
            Type: ((_u = order === null || order === void 0 ? void 0 : order.customer) === null || _u === void 0 ? void 0 : _u.type) || 'Individual' // Default to a valid value like 'Individual'
        }
    });
};
exports.generateConsignee = generateConsignee;
const generateShipmentDetails = (order) => {
    var _a, _b, _c, _d;
    return {
        Dimensions: {
            Length: ((_a = order === null || order === void 0 ? void 0 : order.dimensions) === null || _a === void 0 ? void 0 : _a.length) || 10, // Default length in cm
            Width: ((_b = order === null || order === void 0 ? void 0 : order.dimensions) === null || _b === void 0 ? void 0 : _b.width) || 10, // Default width in cm
            Height: ((_c = order === null || order === void 0 ? void 0 : order.dimensions) === null || _c === void 0 ? void 0 : _c.height) || 10, // Default height in cm
            Unit: 'CM'
        },
        ActualWeight: {
            Value: (order === null || order === void 0 ? void 0 : order.weight) || 0.5, // Default weight in Kg
            Unit: 'Kg'
        },
        ChargeableWeight: {
            Value: (order === null || order === void 0 ? void 0 : order.chargeable_weight) || 0.5, // Default value
            Unit: 'Kg'
        },
        NumberOfPieces: (order === null || order === void 0 ? void 0 : order.products_count) || 1,
        ProductGroup: (order === null || order === void 0 ? void 0 : order.currency_code) === "SAR" ? 'DOM' : 'EXP',
        ProductType: (order === null || order === void 0 ? void 0 : order.currency_code) === "SAR" ? 'CDS' : 'EPX',
        PaymentType: 'P',
        PaymentOptions: '',
        Services: '',
        DescriptionOfGoods: ((_d = order === null || order === void 0 ? void 0 : order.products) === null || _d === void 0 ? void 0 : _d.map((p) => p.name).join(', ')) || 'Goods',
        GoodsOriginCountry: 'SA',
        CashOnDeliveryAmount: {
            Value: 0,
            CurrencyCode: (order === null || order === void 0 ? void 0 : order.currency_code) || 'SAR'
        },
        InsuranceAmount: {
            Value: 0,
            CurrencyCode: (order === null || order === void 0 ? void 0 : order.currency_code) || 'SAR'
        },
        CollectAmount: {
            Value: 0,
            CurrencyCode: (order === null || order === void 0 ? void 0 : order.currency_code) || 'SAR'
        },
        CashAdditionalAmount: {
            Value: 0,
            CurrencyCode: (order === null || order === void 0 ? void 0 : order.currency_code) || 'SAR'
        },
        CashAdditionalAmountDescription: '',
        CustomsValueAmount: {
            Value: (order === null || order === void 0 ? void 0 : order.currency_code) === "SAR" ? 0 : (order === null || order === void 0 ? void 0 : order.order_total) || 0,
            CurrencyCode: (order === null || order === void 0 ? void 0 : order.currency_code) || 'SAR'
        },
        Items: [
            {
                PackageType: 'Box',
                Quantity: order === null || order === void 0 ? void 0 : order.products_count,
                Weight: {
                    Value: 0.5,
                    Unit: 'Kg'
                },
                Comments: 'Healthcare Products',
                Reference: ''
            }
        ]
    };
};
exports.generateShipmentDetails = generateShipmentDetails;
const generateThirdParty = (order) => ({
    Reference1: ``,
    Reference2: '',
    Reference3: '',
    AccountNumber: '',
    PartyAddress: {
        Line1: '',
        Line2: '',
        Line3: '',
        City: '',
        StateOrProvinceCode: '', // Ensure state is populated if available
        PostCode: '', // Use a default valid value if missing
        CountryCode: '' // Default to 'SA' if no currency code
    },
    Contact: {
        Department: '',
        PersonName: '',
        Title: '',
        CompanyName: '',
        PhoneNumber1: '', // Provide a default valid phone number
        PhoneNumber1Ext: '',
        PhoneNumber2: '',
        PhoneNumber2Ext: '',
        FaxNumber: '',
        CellPhone: '', // Provide a default valid phone number
        EmailAddress: '', // Provide a default email if missing
        Type: '' // Default to a valid value like 'Individual'
    }
});
exports.generateThirdParty = generateThirdParty;
const createSoapClient = (wsdlPath) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        soap.createClient(wsdlPath, (err, client) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(client);
            }
        });
    });
});
const dispatchSoapRequest = (wsdlPath, operation, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield createSoapClient(wsdlPath);
        return new Promise((resolve, reject) => {
            client[operation](args, (err, result, envelope) => {
                if (err) {
                    reject(err);
                }
                else if (result) {
                    resolve(result);
                }
                else {
                    const parser = new xml2js_1.default.Parser({ explicitArray: false, ignoreAttrs: true });
                    parser.parseString(envelope, (parseErr, parsedEnvelope) => {
                        if (parseErr) {
                            reject(parseErr);
                        }
                        else {
                            resolve(parsedEnvelope['s:Envelope']['s:Body']);
                        }
                    });
                }
            });
        });
    }
    catch (error) {
        throw error;
    }
});
exports.dispatchSoapRequest = dispatchSoapRequest;
