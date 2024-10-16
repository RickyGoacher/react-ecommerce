import "./style.css";
import StepperComponent from "../../Components/Stepper/StepperComponent";
import StepperItemComponent from "../../Components/Stepper/StepperItemComponent";
import { useState, useEffect } from "react";
import { Input } from "../../Components/FormElements/Input/Input";
import { StringValidation, EmailValidation, PhoneValidation, PostcodeValidation, IsRequiredStringValidation } from "../../Helpers/FormValidation";
import { PostcodeLookup } from "../../Components/PostcodeLookup/PostcodeLookup";
import { useAddressStorage } from "../../Hooks/UseStorageHook/UseStorage";
import { useScrollTop } from "../../Hooks/UseScrollTop/UseScrollTop";

export const Checkout = () => {

    const [getStorage, setStorage] = useAddressStorage();

    const defaultAddress ={
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "addressLineOne": "",
        "addressLineTwo": "",
        "town": "",
        "postcode": "",
        "county": ""
    }

    const [getAutofill, setAutofill] = useState(JSON.parse(getStorage('address')) || defaultAddress);

    const [getFirstName, setFirstName] = useState<{value:string; isValid:boolean}>({
        value: getAutofill.firstName ? getAutofill.firstName : "",
        isValid: StringValidation(getAutofill.firstName) ? true : false
    });
    const [getLastName, setLastName] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.lastName ? getAutofill.lastName : "",
        isValid: StringValidation(getAutofill.lastName) ? true : false
    });
    const [getEmail, setEmail] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.email ? getAutofill.email : "",
        isValid: EmailValidation(getAutofill.email) ? true : false
    });
    const [getPhoneNumber, setPhoneNumber] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.phone ? getAutofill.phone : "",
        isValid: PhoneValidation(getAutofill.phone) ? true : false
    });

    const [getPostcode, setPostcode] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.postcode ? getAutofill.postcode : "",
        isValid:  PostcodeValidation(getAutofill.postcode) ? true : false
    });

    const [getAddressLineOne, setAddressLineOne] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.addressLineOne ? getAutofill.addressLineOne : "",
        isValid: IsRequiredStringValidation(getAutofill.addressLineOne) ? true : false
    });

    const [getAddressLineTwo, setAddressLineTwo] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.addressLineTwo ? getAutofill.addressLineTwo : "",
        isValid: IsRequiredStringValidation(getAutofill.addressLineTwo) ? true : false
    });

    const [getTown, setTown] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.town ? getAutofill.town : "",
        isValid: IsRequiredStringValidation(getAutofill.town) ? true : false
     });

    const [getCounty, setCounty] = useState<{value:string; isValid:boolean}>({
        value:  getAutofill.county ? getAutofill.county : "",
        isValid: IsRequiredStringValidation(getAutofill.county) ? true : false
    });

    const [getProceed, setProceed] = useState(getFirstName.isValid && getLastName.isValid && getEmail.isValid && getPhoneNumber.isValid && getPostcode.isValid && getAddressLineOne.isValid && getAddressLineTwo.isValid && getCounty.isValid && getTown.isValid);

    useEffect(() => {
        setStorage({
            "firstName": getFirstName.value,
            "lastName": getLastName.value,
            "email": getEmail.value,
            "phone": getPhoneNumber.value,
            "addressLineOne": getAddressLineOne.value,
            "addressLineTwo": getAddressLineTwo.value,
            "town": getTown.value,
            "postcode": getPostcode.value,
            "county": getCounty.value
        });
        setAutofill(JSON.parse(getStorage('address')))
        setProceed(getFirstName.isValid && getLastName.isValid && getEmail.isValid && getPhoneNumber.isValid && getPostcode.isValid && getAddressLineOne.isValid && getAddressLineTwo.isValid && getCounty.isValid && getTown.isValid)
    }, [getFirstName, getLastName, getEmail, getPhoneNumber, getPostcode, getAddressLineOne, getAddressLineTwo, getCounty, getTown]);

    useScrollTop([]);

    return (
        <>
            <div className="title-container">
                <h1>Checkout</h1>
            </div>
            <div className="checkout-container">
                <StepperComponent 
                    stepNumberBackgroundColour="var(--primary-bg-colour)" 
                    stepNumberTextColour="var(--white-colour)" 
                    stepNumberWidth="24px"
                    stepNumberHeigth="24px"
                    buttonStyles={{padding: "var(--medium-spacing) var(--large-spacing)", border: 0}}
                    contentWrapperStyles={{padding: "var(--medium-spacing)"}}
                    stepTitleDirectionMobile="column"
                    stepTitleDirectionDesktop="row"
                    mobileBreakpoint={768}
                    Proceed={getProceed}
                >

                    <StepperItemComponent header="Delivery">
                        <div className="step-content">
                            <h2>Delivery</h2>
                            <form id="checkout-form">
                                <div className="form-section name">
                                    <Input Type="text" ChangeHandler={setFirstName} InputValue={getFirstName.value} Label="First Name:" Id="firstName" Validation={StringValidation} ErrorMessage="Please enter your first name."/>
                                    <Input Type="text" ChangeHandler={setLastName} InputValue={getLastName.value} Label="Last Name:" Id="LastName" Validation={StringValidation} ErrorMessage="Please enter your last name."/>
                                </div>
                                
                                <div className="form-section">
                                    <Input Type="text" ChangeHandler={setEmail} InputValue={getEmail.value} Label="Email:" Id="Email" Validation={EmailValidation} ErrorMessage="Please enter a valid email."/>
                                </div>

                                <div className="form-section">
                                    <Input Type="text" ChangeHandler={setPhoneNumber} InputValue={getPhoneNumber.value} Label="Phone Number:" Id="PhoneNumber" Validation={PhoneValidation} ErrorMessage="Please enter a valid phone number."/>
                                </div>
                                
                                <PostcodeLookup 
                                    SetPostcode={setPostcode}
                                    GetPostcode={getPostcode}
                                    AddressLineOne={setAddressLineOne}
                                    GetAddressLineOne={getAddressLineOne}
                                    AddressLineTwo={setAddressLineTwo} 
                                    GetAddressLineTwo={getAddressLineTwo}
                                    Town={setTown} 
                                    GetTown={getTown}
                                    County={setCounty}
                                    GetCounty={getCounty}
                                    />
                               
                            </form>
                        </div>
                    </StepperItemComponent>

                    <StepperItemComponent header="Payment">
                        <div className="step-content">
                            <h2>Payment</h2>
                            <p>
                            Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                            </p>
                        </div>
                    </StepperItemComponent>
                </StepperComponent>  
            </div>
        </>
    );
}