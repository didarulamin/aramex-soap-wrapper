import moment from 'moment';
import { getAramexConfig } from './aramexConfig';

import { Order } from './types';
import getCountryCodeByCurrency from './utils/countryCodeFinder';
import { dispatchSoapRequest, generateConsignee, generateShipmentDetails, generateThirdParty } from './utils/helper';
import path from 'path';





// Create shipment
export const createShipment = async (order:Order) => {
    try {
        const { clientInfo, shipperDetails } = getAramexConfig();

        // Dynamically update Reference1 in shipperDetails
        const updatedShipperDetails = {
            ...shipperDetails,
            Reference1: `${order.id}` // Set Reference1 dynamically from order.id
        };


        // const wsdlPath = path.resolve(__dirname, 'wsdl/shipping.wsdl');
        const wsdlPath = 'https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc?wsdl'

        const consignee = generateConsignee(order);
        console.log(consignee)
        const shipmentDetails = generateShipmentDetails(order);
        console.log(shipmentDetails)
        const ThirdParty = generateThirdParty(order)
        console.log(ThirdParty)



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
                        ShippingDateTime: moment().format(),
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

        return await dispatchSoapRequest(wsdlPath, 'CreateShipments', payload);
    } catch (error) {
        console.error('Error creating shipment:', error);
        throw error;
    }
};


// Track shipments
export const trackShipments = async (shipments:string) => {
    try {
        const { clientInfo } = getAramexConfig();
        const wsdlPath = path.resolve(__dirname, 'wsdl/tracking.wsdl');
 

        const payload = {
            ShipmentTrackingRequest: {
                ClientInfo: clientInfo,
                Shipments: { string: shipments },
            },
        };

        return await dispatchSoapRequest(wsdlPath, 'TrackShipments', payload);
    } catch (error) {
        console.error('Error tracking shipments:', error);
        throw error;
    }
};




// Print shipment label
export const printShipmentLabel = async (shipmentNumber:string) => {
    try {
        const { clientInfo } = getAramexConfig();
        const wsdlPath = path.resolve(__dirname, 'wsdl/shipping.wsdl');
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

        return await dispatchSoapRequest(wsdlPath, 'PrintLabel', payload);
    } catch (error) {
        console.error('Error printing shipment label:', error);
        throw error;
    }
};




export const validateAddress = async (order:Order) => {

    const address = {
        Line1: order?.shipping?.address?.street || '',
        Line2: order?.shipping?.address?.district || '',
        Line3: order?.shipping?.address?.formatted_address || '',
        City: order?.shipping?.address?.city?.name || '',
        StateOrProvinceCode: order?.shipping?.address?.state || '',
        PostCode: order?.shipping?.address?.postal_code || '00000',
        CountryCode: getCountryCodeByCurrency(order?.currency_code) || 'SA' // Default to 'SA'
    };

    try {
        const { clientInfo } = getAramexConfig();
        // const wsdlPath = path.resolve(__dirname, 'wsdl/location.wsdl');
        const wsdlPath = 'https://ws.aramex.net/ShippingAPI/Location/Service_1_0.svc?wsdl'

        // Construct address payload from the order
        const payload = {
            AddressValidationRequest: {
                ClientInfo: clientInfo,
                Address: address,
                Transaction: null
            },
        };

        // Dispatch the SOAP request
        return await dispatchSoapRequest(wsdlPath, 'ValidateAddress', payload);
    } catch (error) {
        console.error('Error validating address:', error);
        throw error;
    }
};



export const fetchAllCountries = async () => {
    try {
        const { clientInfo } = getAramexConfig();
        const wsdlPath = path.resolve(__dirname, 'wsdl/location.wsdl');

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

        return await dispatchSoapRequest(wsdlPath, 'FetchCountries', payload);
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};


export const fetchCitiesByCountry = async (countryCode:string) => {
    try {
        const { clientInfo } = getAramexConfig();
        const wsdlPath = path.resolve(__dirname, 'wsdl/location.wsdl');
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

        return await dispatchSoapRequest(wsdlPath, 'FetchCities', payload);
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};


export const fetchOfficesByCountry = async (countryCode:string) => {
    try {
        const { clientInfo } = getAramexConfig();
        const wsdlPath = path.resolve(__dirname, 'wsdl/location.wsdl');
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

        return await dispatchSoapRequest(wsdlPath, 'FetchOffices', payload);
    } catch (error) {
        console.error('Error fetching offices:', error);
        throw error;
    }
};



