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
    sku: string;
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

export interface AddressLookupInterface {
    features: Array<FeaturesInterface>
}

export interface FeaturesInterface {
    bbox: Array<number>;
    geometry: {
        coordinates: Array<number>;
        type: string;
    }
    properties: PropertiesInterface;
}

export interface PropertiesInterface {
    address_line1: string;
    address_line2: string;
    city: string;
    country: string;
    country_code: string;
    county: string;
    datasource: {
        sourcename: string;
        attribution: string;
        license: string;
        url: string;
    }
    formatted: string;
    housenumber: string;
    lat: number;
    lon: number;
    place_id: string;
    plus_code: string;
    plus_code_short: string;
    postcode: string;
    rank: {
        confidence: number; 
        confidence_street_level: number;
        confidence_building_level: number;
        match_type: string;
    }
    result_type: string;
    state: string;
    state_code: string;
    street: string;
    timezone: {
        name: string;
        offset_STD: string;
        offset_STD_seconds: number;
        offset_DST: string;
        offset_DST_seconds: number;
    }
    town: string;
    village: string;
}