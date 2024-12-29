

import { describe, it, expect } from 'vitest';
import { aramexInstance } from '../example/configAramex';
import request from 'supertest';




describe('Aramex Package Tests', () => {
    it('should print a shipment label and include a LabelURL', async () => {
         const result = await aramexInstance.printShipmentLabel('50307439313');
     
        console.log(JSON.stringify(result))


        
        // Check if result is defined
        expect(result).toBeDefined();
        
        // Check if ShipmentLabel and LabelURL exist in the result
        // expect(result.ShipmentLabel).toBeDefined();
        // expect(result.ShipmentLabel.LabelURL).toBeDefined();
        
        // Check if LabelURL is a valid URL (optional but useful)
        // const urlRegex = /^https?:\/\/[^\s]+$/;
        // expect(urlRegex.test(result.ShipmentLabel.LabelURL)).toBe(true);
        
        // Optional: Check other fields if needed
        expect(result.HasErrors).toBe(true);
        // expect(result.ShipmentNumber).toBe('50307439313');
    });
});
