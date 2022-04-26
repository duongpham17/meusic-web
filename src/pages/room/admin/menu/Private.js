import styles from './Private.module.scss';
import React from 'react';
import useBasicForm from 'hooks/useBasicForm';
import {MdKeyboardArrowRight} from 'react-icons/md';
import Cover from 'components/cover';

const Private = (props) => {
    
    const {element, onOpenValue, roomPrivateUpdate} = props;

    const {value, onChange, onStopPropagation, onSubmit} = useBasicForm({password: ""});

    const onMakePrivateRoom = async () => {
        if(!value.password) return;
        const data = {
            ...value,
            ...element,
            private: true,
        };
        await roomPrivateUpdate(data);
        onOpenValue("");
    };

    const onMakePublicRoom = async () => {
        const data = {
            ...element,
            private: false
        };
        await roomPrivateUpdate(data);
        onOpenValue("");
    }

    return (
        <Cover onClose={() => onOpenValue("")}>
            <div className={styles.container}>
                <form onSubmit={onSubmit(onMakePrivateRoom)} onClick={onStopPropagation}>

                    { element.private &&
                        <button type="button" onClick={onMakePublicRoom}>
                            <span>Make public</span>
                            <span><MdKeyboardArrowRight/></span>
                        </button>
                    }

                    <input type="password" autoComplete="on" placeholder="Room password" name="password" value={value.password} onChange={onChange} />

                    { value.password &&
                        <button>
                            <span>Make private</span>
                            <span><MdKeyboardArrowRight/></span>
                        </button>
                    }

                </form>
            </div>
        </Cover>
    )
}

export default Private