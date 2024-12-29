// Example: aramexConfig.ts
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


// export interface Order {
//     id: string;
//     shipping: {
//         address: {
//             street: string;
//             district?: string;
//             formatted_address?: string;
//             city: { name: string };
//             state?: string;
//             postal_code?: string;
//         };
//     };
//     customer: {
//         name: string;
//         mobile: string;
//         email: string;
//         type?: string;
//     };
//     currency_code: string;
//     dimensions?: { length: number; width: number; height: number };
//     weight?: number;
//     chargeable_weight?: number;
//     products_count?: number;
//     products?: { name: string }[];
//     order_total?: number;

// }

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


// export interface Order {
//     id: number;
//     code: string;
//     store_id: number;
//     order_url: string;
//     store_name: string;
//     shipping_method_code: string;
//     store_url: string;
//     order_status: {
//       name: string;
//       code: string;
//     };
//     currency_code: string;
//     customer: {
//       id: number;
//       name: string;
//       email: string;
//       mobile: string;
//       note: string;
//       verified: number;
//       type: string;
//     };
//     has_different_consignee: number;
//     is_guest_customer: number;
//     is_gift_order: number;
//     gift_card_details: null;
//     is_quick_checkout_order: boolean;
//     order_total: string;
//     order_total_string: string;
//     has_different_transaction_currency: boolean;
//     transaction_reference: string;
//     transaction_amount: number;
//     transaction_amount_string: string;
//     issue_date: string;
//     payment_status: string;
//     is_potential_fraud: boolean;
//     source: string;
//     source_code: string;
//     is_reseller_transaction: boolean;
//     created_at: string;
//     updated_at: string;
//     is_on_demand: boolean;
//     tags: string[];
//     requires_shipping: boolean;
//     should_merchant_set_shipping_method: boolean;
//     shipping: {
//         method: {
//           id: number;
//           name: string;
//           code: string;
//           estimated_delivery_time: string;
//           icon: string;
//           is_system_option: boolean;
//           waybill: null | string;
//           had_errors_while_fetching_waybill: boolean;
//           waybill_tracking_id: string;
//           has_waybill_and_packing_list: boolean;
//           tracking: {
//             number: string;
//             status: string;
//             url: string;
//           };
//           order_shipping_status: string;
//           inventory_address: any[];
//           courier: null | string;
//           return_shipment: null | string;
//         };
//         address: {
//           formatted_address: string;
//           street: string;
//           district: string;
//           lat: number;
//           lng: number;
//           short_address: string;
//           meta: null | string;
//           city: {
//             id: number;
//             name: string;
//           };
//           country: {
//             id: number;
//             name: string;
//           };
//           state?: string; // Added 'state'
//           postal_code?: string; // Added 'postal_code'
//         };
//       };
//     payment: {
//       method: {
//         name: string;
//         code: string;
//         type: string;
//         cart_payment_request_token: null | string;
//       };
//       invoice: {
//         code: string;
//         value: string | number;
//         value_string: string;
//         title: string;
//       }[];
//     };
//     cod_confirmed: boolean;
//     reverse_order_label_request: null | string;
//     customer_note: string;
//     gift_message: null | string;
//     payment_link: null | string;
//     weight: number;
//     weight_cost_details: any[];
//     currency: {
//       order_currency: {
//         id: number;
//         code: string;
//         exchange_rate: number;
//       };
//       order_store_currency: {
//         id: number;
//         code: string;
//         exchange_rate: null | string;
//       };
//     };
//     coupon: {
//       code: string;
//       name: string;
//       id: number;
//       discount: string;
//       discount_string: string;
//     };
//     products: {
//       id: string;
//       parent_id: null | string;
//       parent_name: null | string;
//       product_class: null | string;
//       name: string;
//       short_description: {
//         ar: string;
//         en?: string;
//       };
//       sku: string;
//       barcode: null | string;
//       custom_fields: any[];
//       quantity: number;
//       weight: null | number;
//       is_taxable: boolean;
//       is_discounted: boolean;
//       meta: null | string;
//       is_external_product: boolean;
//       net_price_with_additions: number;
//       net_price_with_additions_string: string;
//       price_with_additions: number;
//       price_with_additions_string: string;
//       net_price: number;
//       net_price_string: string;
//       net_sale_price: string;
//       net_sale_price_string: string;
//       net_additions_price: number;
//       net_additions_price_string: null | string;
//       gross_price: number;
//       gross_price_string: string;
//       gross_sale_price: string;
//       gross_sale_price_string: string;
//       price_before: number;
//       price_before_string: string;
//       total_before: number;
//       total_before_string: string;
//       gross_additions_price: number;
//       gross_additions_price_string: null | string;
//       tax_percentage: number;
//       tax_amount: string;
//       tax_amount_string: string;
//       tax_amount_string_per_item: string;
//       price: number;
//       price_string: string;
//       additions_price: number;
//       additions_price_string: string;
//       total: number;
//       total_string: string;
//       images: {
//         id: string;
//         origin: string;
//         thumbs: {
//           fullSize: string;
//           thumbnail: string;
//           small: string;
//           medium: string;
//           large: string;
//         };
//       }[];
//       options: any[];
//     }[];
//     products_count:number,
//     dimensions?: { 
//         height: number; 
//         width: number; 
//         depth: number;
//         length:number;
//       };
//   }
  
export interface Order {
    [key: string]: any;
  }