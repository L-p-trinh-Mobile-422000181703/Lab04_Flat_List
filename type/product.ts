export type Product = {   
    product_name: string;
    shop: string;
    image: string;
}

export type UsbProduct = {
    product_name: string;
    shop: string;
    price: string;
    discount: string;
    rating: string;
    comment: string;
    image: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}