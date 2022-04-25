import styles from './Controls.module.scss';
import React from 'react';

import {BsFillSkipEndFill, BsFillSkipStartFill} from 'react-icons/bs';

const Controls = (props) => {

    const {onNext, onPrevious, emitChangeSong, params} = props;

    const onSongChange = (type) => () => {
        let song;
        if(type === "next") song = onNext();
        if(type === "previous") song = onPrevious();
        song.room = params.room;
        emitChangeSong(song);
    };

    return (
        <div className={styles.container}>

            <button onClick={onSongChange("previous")}>
                <BsFillSkipStartFill />
            </button>
            
            <button onClick={onSongChange("next")}>
                <BsFillSkipEndFill />
            </button>

        </div>
    )
}

export default Controls