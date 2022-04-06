export const valiation = (values) => {
    let errors = {};

    const check = (key) => key in values;

    if(check("url")){
        if(!values.url) {
            errors.url = "Required";
        } else if(values.url.length < 3){
            errors.url = "At least 3 characters long";
        }
    } 
    
    if(check("song")){
        if(!values.song) {
            errors.song = "Required";
        } else if(values.song.length < 3){
            errors.song = "At least 3 characters long";
        }else if(values.song.includes("http")){
            errors.song = "Cannot be a link";
        }
    } 

    if(check("artist")){
        if(!values.artist) {
            errors.artist = "Required";
        } else if(values.artist.length < 3){
            errors.artist = "At least 3 characters long";
        } else if(values.artist.includes("http")){
            errors.artist = "Cannot be a link";
        }
    } 

    return errors
}

export default valiation;