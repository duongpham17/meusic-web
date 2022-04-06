export const valiation = (values) => {
    let errors = {};

    const check = (key) => key in values;

    if(check("username")){
        if(!values.username){
            errors.username = "Username required";
        }
        else if(values.username.length < 3){
            errors.username = "At least 3 characters long";
        }
        else if(values.username.length >= 18){
            errors.username = "less than 18 characters long";
        }
        else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.username)){ //eslint-disable-line
            errors.username = "No special characters"
        }
    }

    return errors
}

export default valiation;