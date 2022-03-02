/* top level object for all transaction events */
export type Commerce = {
    productListAdds?: ProductListAdds;
    productListViews?: ProductListViews;
    cart?: Cart;
    cartAbandons?: CartAbandon;
    checkouts?: Checkout;
    order?: Order;
    shipping?: Shipping;
    promotionID?: string;
    productViews?: ProductView;
};

export type ProductView = {
    id?: string;
    value: number;
};

export type Cart = {
    ID?: string | null;
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};

export type Order = {
    purchaseID: string;
    payments: Payment[];
};

export type Payment = {
    transactionID?: string;
    paymentAmount?: number;
    paymentType?: string;
    currencyCode?: string;
};

export type Checkout = {
    id?: string;
    value: number;
};

/**
 * Addition of a product to the product list, for example a product is added
 * to a shopping cart.
 */
export type ProductListAdds = {
    id?: string;
    value: number;
};

/** View or views of a product-list has occurred. */
export type ProductListViews = {
    id?: string;
    value: number;
};

export type CartAbandon = {
    id?: string;
    value: number;
};
