import { useState, useEffect } from "react";
import { Input } from "../FormElements/Input/Input";
import { PostcodeValidation, IsRequiredStringValidation } from "../../Helpers/FormValidation";
import { addressAutoComplete } from "../../../data/AutoComplete";
import { AddressLookupInterface, FeaturesInterface } from "../../../App.types";
import './style.css';

interface GetValueInterface {
    value:string; 
    isValid:boolean
}

interface PostcodeLookupInterfact {
    SetPostcode: (value:GetValueInterface) => void;
    GetPostcode: GetValueInterface;
    AddressLineOne: (value:GetValueInterface) => void;
    GetAddressLineOne: GetValueInterface;
    AddressLineTwo: (value:GetValueInterface) => void;
    GetAddressLineTwo: GetValueInterface;
    Town: (value:GetValueInterface) => void;
    GetTown: GetValueInterface;
    County: (value:GetValueInterface) => void;
    GetCounty: GetValueInterface;
}

export const PostcodeLookup = ({SetPostcode, GetPostcode, AddressLineOne, GetAddressLineOne, AddressLineTwo, GetAddressLineTwo, Town, GetTown, County, GetCounty}:PostcodeLookupInterfact) => {

    const [getAddressSearch, setAddressSearch] = useState<{value:string; isValid:boolean}>({
        value: "",
        isValid: true
    });

    const [getAddressSearchResult, setAddressSearchResult] = useState<{value:AddressLookupInterface; isValid:boolean}>({
        value: {features: []},
        isValid: false
    });

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            getAddressSearch.value !== "" && await getAddress(getAddressSearch.value);
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    },[getAddressSearch]);

    async function getAddress(location:string) {
        const Address = await addressAutoComplete(location);
        setAddressSearchResult({value: Address, isValid: true});
    }

    const GenerateAddressList = getAddressSearchResult.value.features?.map((item, index) => {
        return (
            <li key={index} onClick={() => setInputValues(item)}>
                {item.properties.formatted}
            </li>
        );
    });

    function setInputValues(address:FeaturesInterface) {
        SetPostcode({
            value: address.properties.postcode,
            isValid: true
        });
        AddressLineOne({
            value: address.properties.address_line1,
            isValid: true
        });
        AddressLineTwo({
            value: address.properties.address_line2,
            isValid: true
        });
        Town({
            value: address.properties.city,
            isValid: true
        });
        County({
            value: address.properties.county,
            isValid: true
        });
        setAddressSearch({
            value: "",
            isValid: true
        });
    }
    
    return (
        <>
        <div className="form-section address-search">
            <Input Type="text" ChangeHandler={setAddressSearch} InputValue={getAddressSearch.value} Label="Search Address:" Id="AddressSearch" ErrorMessage="Please enter your address"/>
            <ul className={getAddressSearch.value.length > 4 ? "autocomplete active": "autocomplete"}>
                {GenerateAddressList }
            </ul>
        </div>

        <div className="form-section">
            <Input Type="text" ChangeHandler={AddressLineOne} InputValue={GetAddressLineOne.value} Label="Address Line 1:" Id="AddressLineOne" Validation={IsRequiredStringValidation} ErrorMessage="Please enter your address"/>
        </div>

        <div className="form-section">
            <Input Type="text" ChangeHandler={AddressLineTwo} InputValue={GetAddressLineTwo.value} Label="Address Line 2:" Id="AddressLineTwo" Validation={IsRequiredStringValidation} ErrorMessage="Please enter your address"/>
        </div>

        <div className="form-section">
            <Input Type="text" ChangeHandler={Town} InputValue={GetTown.value} Label="Town/City:" Id="TownCity" Validation={IsRequiredStringValidation} ErrorMessage="Please enter your Town/City"/>
        </div>

        <div className="form-section">
            <Input Type="text" ChangeHandler={County} InputValue={GetCounty.value} Label="County:" Id="County" Validation={IsRequiredStringValidation} ErrorMessage="Please enter your County"/>
        </div>

        <div className="form-section">
            <Input Type="text" ChangeHandler={SetPostcode} InputValue={GetPostcode.value || ""} Label="Postcode:" Id="postcode" Validation={PostcodeValidation} ErrorMessage="Please enter a valid postcode."/>
        </div>
    
        </>
    );
}