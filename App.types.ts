export interface ProductListInterface {
    limit: number;
    products: Array<ProductDataInterface>;
    skip: number;
    total: number;
}

export interface ProductDataInterface {
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

export interface CategoryDataInterface {
    slug: string;
    name: string;
    url: string;
}