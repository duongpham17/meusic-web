import styles from './Songs.module.scss';
import React from 'react';

import useOpen from 'hooks/useOpen';

import Overview from './Overview';
import Options from './Options';
import View from './View';

export const Songs = (props) => {

    const {playlist} = props.othersPlaylistReducers;

    const {onOpen, open} = useOpen();
    
    return (  
        <div className={styles.container}>
            {playlist.map(el => 
                <div className={styles.element} key={el._id}>

                    <div className={styles.overview} onClick={onOpen}>
                        <Overview {...props} element={el} />

                        <Options {...props} element={el} />
                    </div>

                    {open && <View {...props} element={el}/>}

                </div>    
            )}
        </div>
    )
}

export default Songs