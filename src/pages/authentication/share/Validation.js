export const valiation = (values) => {
    let errors = {};

    const check = (key) => key in values;

    if(check("email")){
        if(!values.email) {
            errors.email = "Email address required";
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Invalid email address"
        }
    } 

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
            errors.username = "No special characters";
        }
    }

    return errors
}

export default valiation;