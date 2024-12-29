// aramexSetup.ts
import { configureAramex } from './aramexConfig';
import { IinitializeAramex } from './types';

export const initializeAramex = ({
    username,
    password,
    accountNumber,
    accountPin,
    accountEntity,
    accountCountryCode,
    shipper,
}: IinitializeAramex): void => {
    // Configure Aramex with client credentials and shipper details
    configureAramex(
        {
            UserName: username,
            Password: password,
            Version: 'v1.0',
            AccountNumber: accountNumber,
            AccountPin: accountPin,
            AccountEntity: accountEntity, // Default entity, can be parameterized if needed
            AccountCountryCode: accountCountryCode, // Default country code, can be parameterized if needed
        },
        shipper
    );
};
