export const StringValidation = (value:string) => {
    return (typeof value === "string") && value.length > 0  && /^[a-zA-Z]+$/.test(value) ? true : false;
}

export const IsRequiredStringValidation = (value:string) => {
    return (typeof value === "string") && value.length > 0 ? true : false;
}

export const EmailValidation = (value:string) => {
    return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false;
}

export const PhoneValidation = (value:string) => {
    return value.match(/^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/) ? true : false;
}

export const PostcodeValidation = (value:string) => {
    return value.match(/(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/) ? true : false;
}