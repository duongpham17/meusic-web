import styles from './Songs.module.scss';
import React from 'react';

import useOpen from 'hooks/useOpen';

import Overview from './Overview';
import Options from './Options';
import View from './View';

export const Songs = (props) => {

    const {playlist} = props.othersPlaylistReducers;

    const {onOpenValue, openValue} = useOpen();
    
    return (  
        <div className={styles.container}>
            {playlist.map(el => 
                <div className={styles.element} key={el._id}>

                    <div className={styles.overview} onClick={() => onOpenValue(el._id)}>
                        <Overview {...props} element={el} />

                        <Options {...props} element={el} />
                    </div>

                    {openValue === el._id && <View {...props} element={el}/>}

                </div>    
            )}
        </div>
    )
}

export default Songs