import "./style.css";
import StepperComponent from "../../Components/Stepper/StepperComponent";
import StepperItemComponent from "../../Components/Stepper/StepperItemComponent";
import { useState, useEffect } from "react";
import { Input } from "../../Components/FormElements/Input/Input";
import { StringValidation, EmailValidation, PhoneValidation } from "../../Helpers/FormValidation";

export const Checkout = () => {

    const [getFirstName, setFirstName] = useState<{value:string; isValid:boolean}>({
        value: "",
        isValid: false
    });
    const [getLastName, setLastName] = useState<{value:string; isValid:boolean}>({
        value: "",
        isValid: false
    });
    const [getEmail, setEmail] = useState<{value:string; isValid:boolean}>({
        value: "",
        isValid: false
    });
    const [getPhoneNumber, setPhoneNumber] = useState<{value:string; isValid:boolean}>({
        value: "",
        isValid: false
    });

    const [getProceed, setProceed] = useState(getFirstName.isValid && getLastName.isValid && getEmail.isValid && getPhoneNumber.isValid);

    useEffect(() => {
        setProceed(getFirstName.isValid && getLastName.isValid && getEmail.isValid && getPhoneNumber.isValid)
    }, [getFirstName, getLastName, getEmail, getPhoneNumber])

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
                    buttonStyles={{padding: "var(--medium-spacing) var(--large-spacing)", border: 0, backgroundColor: "var(--primary-bg-colour)", color: "var(--white-colour)"}}
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
                                
                                <div className="form-section">
                                    <div className="form-item">
                                        <label>Address Line 1:</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                
                                <div className="form-section">
                                    <div className="form-item">
                                        <label>Address Line 2 (Optional): </label>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <div className="form-item">
                                        <label>City/Town:</label>
                                        <input type="text" />
                                    </div>
                                </div>
                               
                                <div className="form-section">
                                    <div className="form-item">
                                        <label>Postcode:</label>
                                        <input type="text" />
                                    </div>
                                </div>
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