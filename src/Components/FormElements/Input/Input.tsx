import { useEffect, useState } from "react";
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
    Validation?: (value:string) => boolean;
}

export const Input = ({Type, Label, Id, PlaceHolder, InputValue, ChangeHandler, ErrorMessage, Validation}:InputInterface) => {

    const [getFocus, setFocus] = useState(false);

    useEffect(() => {
        if(Validation) {
            if(Validation(InputValue)) {
                setFocus(true);
                Validation(InputValue)
            } else {
                setFocus(false);
                ChangeHandler({
                    value: InputValue,
                    isValid: Validation ? Validation(InputValue) : true
                });
            }
        } else {
            setFocus(true)
        }
    }, [InputValue]);

    return (
        <div className={getFocus ? "form-item" : "form-item error"}>
            <label htmlFor={Id}>{Label}</label>
            <input 
                type={Type} 
                placeholder={PlaceHolder} 
                id={Id} onChange={(e) => ChangeHandler({
                    value: e.target.value,
                    isValid: Validation ? Validation((e.target as HTMLInputElement).value) : true
                })}
                value={InputValue}
                required={true}
            />
            {!getFocus && <span>{ErrorMessage}</span>}
        </div>
    );
}