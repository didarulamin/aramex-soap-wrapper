"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAramexConfig = exports.configureAramex = void 0;
const aramexConfig = {
    clientInfo: null,
    shipperDetails: null,
};
const configureAramex = (client, shipper) => {
    aramexConfig.clientInfo = client;
    aramexConfig.shipperDetails = shipper;
};
exports.configureAramex = configureAramex;
const getAramexConfig = () => {
    if (!aramexConfig.clientInfo || !aramexConfig.shipperDetails) {
        throw new Error('Aramex is not configured. Please call `configureAramex` first.');
    }
    return aramexConfig;
};
exports.getAramexConfig = getAramexConfig;
