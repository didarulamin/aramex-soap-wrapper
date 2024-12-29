import { AramexConfig, ClientInfo, ShipperDetails } from "./types";




const aramexConfig: AramexConfig = {
    clientInfo: null,
    shipperDetails: null,
};

export const configureAramex = (client: ClientInfo, shipper: ShipperDetails): void => {
    aramexConfig.clientInfo = client;
    aramexConfig.shipperDetails = shipper;
};

export const getAramexConfig = (): AramexConfig => {
    if (!aramexConfig.clientInfo || !aramexConfig.shipperDetails) {
        throw new Error('Aramex is not configured. Please call `configureAramex` first.');
    }
    return aramexConfig;
};
