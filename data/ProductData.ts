import {ProductList} from '../App.types.ts';

export async function getProducts(limit?:number, skip?:number) {
    const Limit = limit ? 'limit=' + limit : '';
    const Skip = skip ? 'skip=' + skip : '';
    const URL = `https://dummyjson.com/products${limit || skip ? "?" : ''}${Limit}${Skip}`;
    const Response = await fetch(URL);
    const Data:ProductList = await Response.json();
    console.log(Data, 'the data');
    return Data;
}