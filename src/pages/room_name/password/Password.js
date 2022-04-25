import styles from './Password.module.scss';
import React, { useEffect } from 'react';
import useBasicForm from 'hooks/useBasicForm';
import {MdLock, MdKeyboardArrowRight} from 'react-icons/md';
import Cover from 'components/cover';

const Password = (props) => {

    const {verified, setVerified, roomCheckPassword, roomClearError} = props;

    const {room:{room, error}} = props.roomReducers;

    const {value, loading, onChange, onSubmit} = useBasicForm({password: ""});
    
    const onCheckPassword = async () => {
        const data = {...value, ...room}
        const verify = await roomCheckPassword(data);
        if(verify) return setVerified(true);
    };

    useEffect(() => {
        return () => roomClearError()
    }, [roomClearError]);

    return (
        verified === false &&
        <Cover>
            <div className={styles.container}>
                <form onSubmit={onSubmit(onCheckPassword)}>

                    <div>
                        <MdLock/>
                        <input type="password" placeholder="Password" name="password" value={value.password} onChange={onChange} />
                    </div>

                    {error && <small> {error.password} </small> }

                    {value.password &&
                        <button>
                            <span>Enter room</span>
                            <span>{loading ? <p className="loading-10"/> : <MdKeyboardArrowRight/>}</span>
                        </button>
                    }
                </form>
            </div>
        </Cover>
    )
};

export default Password