export const isValidEmail = (emailString:string) => {
    const regexEmail =
        /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
        if (regexEmail.test(emailString)){
            return true
        }
        else {
            return false
        }
}

export const isValidPassword = (passwordString: string)=>{
    return passwordString.length >= 6
}