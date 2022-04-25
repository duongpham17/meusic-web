import styles from './Create.module.scss';
import React from 'react';

import { MdAdd, MdKeyboardArrowRight } from 'react-icons/md';

import Cover from 'components/cover';
import useOpen from 'hooks/useOpen';
import useBasicForm from 'hooks/useBasicForm';

const Create = (props) => {
    
    const {roomCreate} = props;

    const {error} = props.roomReducers;

    const {open, onOpen} = useOpen(false);

    const {value, onClear, onChange, onStopPropagation, onSubmit} = useBasicForm({name: ""});

    const onRoomCreate = async () => {
        if(value.name.length >= 15) return;
        const room = await roomCreate(value);
        if(room) onOpen();
        onClear();
    };

    return (
        <div className={styles.container}>

            <div className={styles.createBtn} onClick={onOpen}>
                <MdAdd />
            </div>

            { open &&
            <Cover>
                <div className={styles.content} onClick={onOpen}>
                    <form onClick={onStopPropagation} onSubmit={onSubmit(onRoomCreate)}>
                        <input type="text" placeholder="Room name" name="name" value={value.name} onChange={onChange} />
                        {error.exist && <small>{error.exist}</small>}
                        {value.name.length >= 10 && <small>Max 10 letters</small>}
                        {value.name &&
                            <button>
                                <span>Create room</span>
                                <span><MdKeyboardArrowRight/></span>
                            </button>
                        }
                    </form>
                </div>
            </Cover>
            }
            
        </div>
    )
};

export default Create;