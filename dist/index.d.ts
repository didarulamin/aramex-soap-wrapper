import getCountryCodeByCurrency from './utils/countryCodeFinder';
declare const _default: {
    initializeAramex: ({ username, password, accountNumber, accountPin, accountEntity, accountCountryCode, shipper, }: import("./types").IinitializeAramex) => void;
    configureAramex: (client: import("./types").ClientInfo, shipper: import("./types").ShipperDetails) => void;
    getAramexConfig: () => import("./types").AramexConfig;
    getCountryCodeByCurrency: typeof getCountryCodeByCurrency;
    createShipment: (order: import("./types").Order) => Promise<any>;
    trackShipments: (shipments: string) => Promise<any>;
    printShipmentLabel: (shipmentNumber: string) => Promise<any>;
    validateAddress: (order: import("./types").Order) => Promise<any>;
    fetchAllCountries: () => Promise<any>;
    fetchCitiesByCountry: (countryCode: string) => Promise<any>;
    fetchOfficesByCountry: (countryCode: string) => Promise<any>;
};
export default _default;
