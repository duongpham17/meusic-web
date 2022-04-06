export const valiation = (values) => {
    let errors = {};

    const check = (key) => key in values;

    if(check("name")){
        if(!values.name) {
            errors.name = "Name required";
        } else if(values.name.length < 2){
            errors.name = "At least 2 characters";
        } else if(values.name.length >= 50){
            errors.name = "Less than 50 characters";
        }
    } 

    return errors
}

export default valiation;