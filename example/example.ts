import { aramexInstance } from './configAramex';



aramexInstance.printShipmentLabel('50307439313')
    .then((result :any) => {
        console.log('Tracking Result:', result);
    })
    .catch((error:any) => {
        console.error('Error:', error);
    });

