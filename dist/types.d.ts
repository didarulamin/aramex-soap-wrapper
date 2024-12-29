export interface IinitializeAramex {
    username: string;
    password: string;
    accountNumber: string;
    accountPin: string;
    accountEntity: string;
    accountCountryCode: string;
    shipper: ShipperDetails;
}
export interface AramexConfig {
    clientInfo: ClientInfo | null;
    shipperDetails: ShipperDetails | null;
}
export interface ShipperDetails {
    Reference1?: string;
    Reference2?: string;
    PartyAddress: {
        Line1: string;
        Line2?: string;
        Line3?: string;
        City: string;
        StateOrProvinceCode?: string;
        PostCode?: string;
        CountryCode: string;
    };
    Contact: {
        Department?: string;
        PersonName: string;
        Title?: string;
        CompanyName: string;
        PhoneNumber1: string;
        PhoneNumber1Ext?: string;
        PhoneNumber2?: string;
        PhoneNumber2Ext?: string;
        FaxNumber?: string;
        CellPhone: string;
        EmailAddress: string;
        Type: string;
    };
}
export interface ClientInfo {
    UserName: string;
    Password: string;
    Version: string;
    AccountNumber: string;
    AccountPin: string;
    AccountEntity: string;
    AccountCountryCode: string;
}
export interface Order {
    [key: string]: any;
}
