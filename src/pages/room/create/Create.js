import styles from './Create.module.scss';
import React from 'react';

import { MdAdd, MdKeyboardArrowRight } from 'react-icons/md';

import useOpen from 'hooks/useOpen';
import useBasicForm from 'hooks/useBasicForm';

const Create = (props) => {
    const {room, roomCreate} = props;
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
                <div className={styles.cover} onClick={onOpen}>
                    <form onClick={onStopPropagation} onSubmit={onSubmit(onRoomCreate)}>
                        <input type="text" placeholder="Room name" name="name" value={value.name} onChange={onChange} />
                        {room.error.exist && <small>{room.error.exist}</small>}
                        {value.name.length >= 10 && <small>Max 10 letters</small>}
                        {value.name &&
                            <button>
                                <span>Create room</span>
                                <span><MdKeyboardArrowRight/></span>
                            </button>
                        }
                    </form>
                </div>
            }
        </div>
    )
};

export default Create;