import aramex from '../src/index';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the shipper object using appropriate types
const shipper = {
    Reference1: 'order number',
    Reference2: '',
    AccountNumber: '71385220',
    PartyAddress: {
        Line1: '3915 Anas Ibn Malik, As Sahafah, Riyadh 13321 8674',
        Line2: '',
        Line3: '',
        City: 'Riyadh',
        StateOrProvinceCode: '',
        PostCode: '',
        CountryCode: 'SA',
    },
    Contact: {
        Department: '',
        PersonName: 'LEMÛRE',
        Title: '',
        CompanyName: 'Amama Medical Co. (E-Commerce)',
        PhoneNumber1: '+9660554433138',
        PhoneNumber1Ext: '',
        PhoneNumber2: '',
        PhoneNumber2Ext: '',
        FaxNumber: '',
        CellPhone: '+9660554433138',
        EmailAddress: 'w.eisa@lemuregroup.com',
        Type: ''
    }
};


aramex.initializeAramex({
    username: process.env.ARAMEX_USERNAME as string,   // Type assertion
    password: process.env.ARAMEX_PASSWORD as string,   // Type assertion
    accountNumber: process.env.ARAMEX_ACCOUNT_NUMBER as string,  // Type assertion
    accountPin: process.env.ARAMEX_ACCOUNT_PIN as string,  // Type assertion
    accountEntity: process.env.ARAMEX_ACCOUNT_ENTITY as string,  // Type assertion
    accountCountryCode: process.env.ARAMEX_COUNTRY_CODE as string, // Type assertion
    shipper: shipper,
});


export const aramexInstance =aramex

