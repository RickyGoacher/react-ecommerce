import {ProductListInterface, CategoryDataInterface} from '../App.types.ts';

const BaseURL = 'https://dummyjson.com';

/*
    GET PRODUCTS
    Get all products by default
    PARAMS:
    - limit - Limits number of products returned.
    - skip - Skips passed in number of products.
    - Category - Fetches category Specific products.
*/

export async function getProducts(limit?:number, skip?:number, category?: string) {
    const Limit = limit ? 'limit=' + limit : '';
    const Skip = skip ? 'skip=' + skip : '';
    const Category = category ? '/category/' + category : '';
    const URL = `${BaseURL}/products${Category}${limit || skip ? "?" : ''}${Limit}${Skip}`;
    const Response = await fetch(URL);
    const Data:ProductListInterface = await Response.json();
    console.log(Data, 'the data');
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
    console.log(Data, ' cat data')
    return Data;
}