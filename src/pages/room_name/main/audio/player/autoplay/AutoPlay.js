import styles from './AutoPlay.module.scss';
import React, {useState} from 'react'

const AutoPlay = (props) => {

    const {onPlay} = props;

    const [auto, setAuto] = useState(false);

    const onMouseEnter = () => {
        if(auto) return;
        onPlay();
        setAuto(true);
    };

    return (
       !auto && <div className={styles.container} onMouseEnter={onMouseEnter} />
    )
}

export default AutoPlay