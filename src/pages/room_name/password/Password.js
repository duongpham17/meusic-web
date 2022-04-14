import styles from './Password.module.scss';
import React, { useEffect } from 'react';
import useBasicForm from 'hooks/useBasicForm';
import {MdLock, MdKeyboardArrowRight} from 'react-icons/md';

const Password = (props) => {

    const {room, verified, setVerified, roomCheckPassword, roomClearError} = props;

    const {value, loading, onChange, onSubmit} = useBasicForm({password: ""});
    
    const onCheckPassword = async () => {
        const data = {...value, ...room.room}
        const verify = await roomCheckPassword(data);
        if(verify) return setVerified(true);
    };

    useEffect(() => {
        return () => roomClearError()
    }, [roomClearError]);

    return (
        verified === false &&
        <div className={styles.container}>
            <form onSubmit={onSubmit(onCheckPassword)}>

                <div>
                    <MdLock/>
                    <input type="password" placeholder="Password" name="password" value={value.password} onChange={onChange} />
                </div>

                {room.error && <small> {room.error.password} </small> }

                {value.password &&
                    <button>
                        <span>Enter room</span>
                        <span>{loading ? <p className="loading-10"/> : <MdKeyboardArrowRight/>}</span>
                    </button>
                }
            </form>
        </div>
    )
};

export default Password