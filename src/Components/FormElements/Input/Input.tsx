import { SyntheticEvent, useState } from "react";
import "./style.css";

interface StateInterface {
    value: string;
    isValid: boolean;
}

interface InputInterface {
    Type: string;
    Label: string;
    Id: string;
    PlaceHolder?: string;
    InputValue: string;
    ChangeHandler: (value:StateInterface) => void;
    ErrorMessage: string;
    Validation: (value:string) => boolean;
}

export const Input = ({Type, Label, Id, PlaceHolder, InputValue, ChangeHandler, ErrorMessage, Validation}:InputInterface) => {

    const [getFocus, setFocus] = useState(false);

    const handleFocus = (e:SyntheticEvent) => {
        if(Validation((e.target as HTMLInputElement).value )) {
            setFocus(true);
        } else {
            setFocus(false);
        }
    }

    return (
        <div className={getFocus ? "form-item" : "form-item error"}>
            <label htmlFor={Id}>{Label}</label>
            <input 
                type={Type} 
                placeholder={PlaceHolder} 
                id={Id} onChange={(e) => ChangeHandler({
                    value: e.target.value,
                    isValid: Validation((e.target as HTMLInputElement).value)
                })} 
                value={InputValue}
                onBlur={handleFocus}
                required={true}
            />
            {!getFocus && <span>{ErrorMessage}</span>}
        </div>
    );
}