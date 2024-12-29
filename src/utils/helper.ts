import { Order } from "../types";
const soap = require('strong-soap').soap;


// Now you can use `soap` in your code

import moment from 'moment';
import xml2js from 'xml2js';
import getCountryCodeByCurrency from "./countryCodeFinder";


export const generateConsignee = (order:Order) => ({
    Reference1: `${order?.id || ''}`,
    Reference2: '',
    AccountNumber: '',
    PartyAddress: {
        Line1: order?.shipping?.address?.street || '',
        Line2: order?.shipping?.address?.district || '',
        Line3: order?.shipping?.address?.formatted_address,
        City: order?.shipping?.address?.city?.name || '',
        StateOrProvinceCode: order?.shipping?.address?.state || '', // Ensure state is populated if available
        PostCode: order?.shipping?.address?.postal_code || '', // Use a default valid value if missing
        CountryCode: getCountryCodeByCurrency(order?.currency_code) || 'SA' // Default to 'SA' if no currency code
    },
    Contact: {
        Department: '',
        PersonName: order?.customer?.name || '',
        Title: '',
        CompanyName: order?.customer?.name,
        PhoneNumber1: order?.customer?.mobile, // Provide a default valid phone number
        PhoneNumber1Ext: '',
        PhoneNumber2: '',
        PhoneNumber2Ext: '',
        FaxNumber: '',
        CellPhone: order?.customer?.mobile || '', // Provide a default valid phone number
        EmailAddress: order?.customer?.email || '', // Provide a default email if missing
        Type: order?.customer?.type || 'Individual' // Default to a valid value like 'Individual'
    }
});


export const generateShipmentDetails = (order:Order) => {


    return {
        Dimensions: {
            Length: order?.dimensions?.length || 10, // Default length in cm
            Width: order?.dimensions?.width || 10,  // Default width in cm
            Height: order?.dimensions?.height || 10, // Default height in cm
            Unit: 'CM'
        },
        ActualWeight: {
            Value: order?.weight || 0.5, // Default weight in Kg
            Unit: 'Kg'
        },
        ChargeableWeight: {
            Value: order?.chargeable_weight || 0.5, // Default value
            Unit: 'Kg'
        },
        NumberOfPieces: order?.products_count || 1,
        ProductGroup: order?.currency_code === "SAR" ? 'DOM' : 'EXP',
        ProductType: order?.currency_code === "SAR" ? 'CDS' : 'EPX',
        PaymentType: 'P',
        PaymentOptions: '',
        Services: '',
        DescriptionOfGoods: order?.products?.map((p:any) => p.name).join(', ') || 'Goods',
        GoodsOriginCountry: 'SA',
        CashOnDeliveryAmount: {
            Value: 0,
            CurrencyCode: order?.currency_code || 'SAR'
        },
        InsuranceAmount: {
            Value: 0,
            CurrencyCode: order?.currency_code || 'SAR'
        },
        CollectAmount: {
            Value: 0,
            CurrencyCode: order?.currency_code || 'SAR'
        },
        CashAdditionalAmount: {
            Value: 0,
            CurrencyCode: order?.currency_code || 'SAR'
        },
        CashAdditionalAmountDescription: '',
        CustomsValueAmount: {
            Value: order?.currency_code === "SAR" ? 0 : order?.order_total || 0,
            CurrencyCode: order?.currency_code || 'SAR'
        },
        Items: [
            {
                PackageType: 'Box',
                Quantity: order?.products_count,
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


export const generateThirdParty = (order:Order) => ({
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



type SoapClient = any; 
const createSoapClient = async (wsdlPath: string): Promise<SoapClient> => {
    return new Promise((resolve, reject) => {
        soap.createClient(wsdlPath, (err: Error, client: SoapClient) => {
            if (err) {
                reject(err);
            } else {
                resolve(client);
            }
        });
    });
};

export const dispatchSoapRequest = async (
    wsdlPath: string,
    operation: string,
    args: Record<string, unknown>
): Promise<any> => {
    try {
        const client = await createSoapClient(wsdlPath);
        return new Promise((resolve, reject) => {
            client[operation](args, (err: any, result: any, envelope: string) => {
                if (err) {
                    reject(err);
                } else if (result) {
                    resolve(result);
                } else {
                    const parser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: true });
                    parser.parseString(envelope, (parseErr, parsedEnvelope) => {
                        if (parseErr) {
                            reject(parseErr);
                        } else {
                            resolve(parsedEnvelope['s:Envelope']['s:Body']);
                        }
                    });
                }
            });
        });
    } catch (error) {
        throw error;
    }
};


