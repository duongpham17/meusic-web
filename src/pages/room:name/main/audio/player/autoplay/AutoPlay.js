import styles from './AutoPlay.module.scss';
import React, {useState} from 'react'

const AutoPlay = (props) => {
    const {play} = props;

    const [auto, setAuto] = useState(false);

    const onPlay = () => {
        if(auto) return;
        play();
        setAuto(true);
    }

    return (
       !auto && <div className={styles.container} onMouseEnter={onPlay} />
    )
}

export default AutoPlay