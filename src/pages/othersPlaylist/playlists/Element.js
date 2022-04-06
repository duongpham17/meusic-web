import styles from './Element.module.scss';
import React, {useState} from 'react';

import Songs from './Songs';
import Options from './Options';
import Overview from './Overview';

export const Element = (props) => {

    const {element} = props;

    const [viewSongs, setViewSongs] = useState("");
    
    const onViewPlaylist = (id) => () => {
        if(viewSongs === id) return setViewSongs("");
        setViewSongs(id);
    };

    return (  
        <div className={styles.container} onClick={onViewPlaylist(element._id)}>

            <div className={styles.overview}>
                <Overview {...props} />

                <Options {...props}/>
            </div>

            {viewSongs === element._id && <Songs {...props} />}

        </div>
    )
}

export default Element