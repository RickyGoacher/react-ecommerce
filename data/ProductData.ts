import {ProductListInterface, CategoryDataInterface, ProductDataInterface} from '../App.types.ts';

const BaseURL = 'https://dummyjson.com';

/*
    GET PRODUCTS
    Get all products by default
    PARAMS:
    - limit - Limits number of products returned.
    - skip - Skips passed in number of products.
    - Category - Fetches category Specific products.
*/

export async function getProducts(limit?:number, skip?:number, category?: string, sortBy?: string, order?: string) {
    const Limit = limit ? 'limit=' + limit : '';
    const Skip = skip ? '&skip=' + skip : '';
    const SortBy = sortBy ? '&sortBy=' + sortBy : '';
    const Order= order ? '&order=' + order : '';
    const Category = category ? '/category/' + category : '';
    const URL = `${BaseURL}/products${Category}${limit || skip ? "?" : ''}${Limit}${Skip}${SortBy}${Order}`;
    const Response = await fetch(URL);
    const Data:ProductListInterface = await Response.json();
    return Data;
}

/*
    GET PRODUCT BY ID
    PARAMS:
        - ID
*/

export async function getProduct(id:number) {
    const URL = `${BaseURL}/products/${id}`;
    const Response = await fetch(URL);
    const Data:ProductDataInterface = await Response.json();
    return Data;
}

/*
    GET CATEGORIES
    Get list of categories.
    - Slug, Name, URL
*/

export async function getCategories() {
    const Response = await fetch(`${BaseURL}/products/categories`);
    const Data:Array<CategoryDataInterface> = await Response.json();
    return Data;
}

export async function searchProducts(query:string) {
    const Response = await fetch(`${BaseURL}/product/search?q=${query}`)
    const Data = await Response.json();
    return Data;
}