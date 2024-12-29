import { Order } from "../types";
export declare const generateConsignee: (order: Order) => {
    Reference1: string;
    Reference2: string;
    AccountNumber: string;
    PartyAddress: {
        Line1: any;
        Line2: any;
        Line3: any;
        City: any;
        StateOrProvinceCode: any;
        PostCode: any;
        CountryCode: string;
    };
    Contact: {
        Department: string;
        PersonName: any;
        Title: string;
        CompanyName: any;
        PhoneNumber1: any;
        PhoneNumber1Ext: string;
        PhoneNumber2: string;
        PhoneNumber2Ext: string;
        FaxNumber: string;
        CellPhone: any;
        EmailAddress: any;
        Type: any;
    };
};
export declare const generateShipmentDetails: (order: Order) => {
    Dimensions: {
        Length: any;
        Width: any;
        Height: any;
        Unit: string;
    };
    ActualWeight: {
        Value: any;
        Unit: string;
    };
    ChargeableWeight: {
        Value: any;
        Unit: string;
    };
    NumberOfPieces: any;
    ProductGroup: string;
    ProductType: string;
    PaymentType: string;
    PaymentOptions: string;
    Services: string;
    DescriptionOfGoods: any;
    GoodsOriginCountry: string;
    CashOnDeliveryAmount: {
        Value: number;
        CurrencyCode: any;
    };
    InsuranceAmount: {
        Value: number;
        CurrencyCode: any;
    };
    CollectAmount: {
        Value: number;
        CurrencyCode: any;
    };
    CashAdditionalAmount: {
        Value: number;
        CurrencyCode: any;
    };
    CashAdditionalAmountDescription: string;
    CustomsValueAmount: {
        Value: any;
        CurrencyCode: any;
    };
    Items: {
        PackageType: string;
        Quantity: any;
        Weight: {
            Value: number;
            Unit: string;
        };
        Comments: string;
        Reference: string;
    }[];
};
export declare const generateThirdParty: (order: Order) => {
    Reference1: string;
    Reference2: string;
    Reference3: string;
    AccountNumber: string;
    PartyAddress: {
        Line1: string;
        Line2: string;
        Line3: string;
        City: string;
        StateOrProvinceCode: string;
        PostCode: string;
        CountryCode: string;
    };
    Contact: {
        Department: string;
        PersonName: string;
        Title: string;
        CompanyName: string;
        PhoneNumber1: string;
        PhoneNumber1Ext: string;
        PhoneNumber2: string;
        PhoneNumber2Ext: string;
        FaxNumber: string;
        CellPhone: string;
        EmailAddress: string;
        Type: string;
    };
};
export declare const dispatchSoapRequest: (wsdlPath: string, operation: string, args: Record<string, unknown>) => Promise<any>;
