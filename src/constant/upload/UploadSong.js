import styles from './UploadSong.module.scss';
import React from 'react';

import useForm from 'hooks/useForm';
import Validation from './validation/Validation';
import CustomValidation from './validation/CustomValidation';

export const UploadSong = (props) => {

    const {upload, uploadSong, uploadClearError} = props;
    
    const {status, uploading} = upload;

    const initalState = {
        url: "",
        song: "",
        artist: ""
    };

    const custom = status === "undefined" ? CustomValidation : Validation;

    const {values, onChange, onSubmit, errors, onClear} = useForm(initalState, callback, custom, true);

    function callback(){
        const isSongUploading = uploading.includes(values.url);
        if(isSongUploading) return onClear();
        uploadSong(values);
    };

    const onClearValidation = () => {
        uploadClearError();
        onClear();
    }

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit} noValidate>

                <textarea type="text" placeholder='Enter Youtube url' name="url" value={values.url} onChange={onChange}/>
                {errors.url && <p className={styles.errors}>* {errors.url} *</p>}

                {status === "undefined" && 
                    <>
                        <input type="text" placeholder='Song name' name="song" value={values.song} onChange={onChange} />
                        {errors.song && <p className={styles.errors}>* {errors.song} *</p>}
                        <input type="text" placeholder='Artist name' name="artist" value={values.artist} onChange={onChange} />
                        {errors.artist && <p className={styles.errors}>* {errors.artist} *</p>}
                    </>
                }

                <div className={styles.status}>
                    {status === "duplicate" && <p> Song already exist</p>}
                    {status === "undefined" && <p> Song needs extra information</p>}
                    {status === "undefined" && <button type="button" onClick={onClearValidation}>Clear validation</button>}
                </div>

                {values.url.includes("https://") && <button>UPLOAD</button>}
            </form>
        </div>

    )
}

export default UploadSong;