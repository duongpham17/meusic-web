export const valiation = (values) => {
    let errors = {};

    const check = (key) => key in values;

    if(check("url")){
        if(!values.url) {
            errors.url = "Youtube url is required";
        } else if(values.url.length < 3){
            errors.url = "At least 3 characters long";
        }
    } 

    return errors
}

export default valiation;