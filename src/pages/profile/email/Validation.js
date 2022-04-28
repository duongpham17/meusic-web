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

    return errors
}

export default valiation;