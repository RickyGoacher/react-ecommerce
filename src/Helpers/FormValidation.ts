export const StringValidation = (value:string) => {
    return (typeof value === "string") && value.length > 0  && /^[a-zA-Z]+$/.test(value) ? true : false;
}

export const EmailValidation = (value:string) => {
    return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false;
}

export const PhoneValidation = (value:string) => {
    return value.match(/^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/) ? true : false;
}