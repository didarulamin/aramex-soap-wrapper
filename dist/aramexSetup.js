"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAramex = void 0;
// aramexSetup.ts
const aramexConfig_1 = require("./aramexConfig");
const initializeAramex = ({ username, password, accountNumber, accountPin, accountEntity, accountCountryCode, shipper, }) => {
    // Configure Aramex with client credentials and shipper details
    (0, aramexConfig_1.configureAramex)({
        UserName: username,
        Password: password,
        Version: 'v1.0',
        AccountNumber: accountNumber,
        AccountPin: accountPin,
        AccountEntity: accountEntity, // Default entity, can be parameterized if needed
        AccountCountryCode: accountCountryCode, // Default country code, can be parameterized if needed
    }, shipper);
};
exports.initializeAramex = initializeAramex;
