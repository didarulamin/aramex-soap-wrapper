import { Order } from './types';
export declare const createShipment: (order: Order) => Promise<any>;
export declare const trackShipments: (shipments: string) => Promise<any>;
export declare const printShipmentLabel: (shipmentNumber: string) => Promise<any>;
export declare const validateAddress: (order: Order) => Promise<any>;
export declare const fetchAllCountries: () => Promise<any>;
export declare const fetchCitiesByCountry: (countryCode: string) => Promise<any>;
export declare const fetchOfficesByCountry: (countryCode: string) => Promise<any>;
