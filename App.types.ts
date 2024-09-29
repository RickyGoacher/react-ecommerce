export interface ProductList {
    limit: number;
    products: Array<ProductData>;
    skip: number;
    total: number;
}

export interface ProductData {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {width: number; height: number; depth: number};
    discountPercentage: number;
    id: number;
    images: Array<string>;
    meta: {createdAt: string; updatedAt: string; barcode: string; qrCode: string;};
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Array<{rating: number; comment: string; date: string; reviewerName: string; reviewerEmail: string;}>;
    shippingInformation: string;
    sku: number;
    tags: Array<string>;
    thumbnail: string;
    title: string;
    warrentyInformation: string;
    weight: number;
}