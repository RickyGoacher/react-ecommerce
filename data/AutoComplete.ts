import { AddressLookupInterface } from "../App.types";


export async function addressAutoComplete(location:string) {
    const RequestOptions = {
        method: 'GET',
    };
    const URL = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=${process.env.GEOAPIKEY}`;
    const Response = await fetch(URL, RequestOptions);
    const Data:AddressLookupInterface = await Response.json();
    return Data;
}