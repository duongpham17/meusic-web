import styles from './Previous.module.scss';
import React, {useState} from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';

import ContextMenu from 'components/contextMenu';
import useOpen from 'hooks/useOpen';
import useUseEffectCleanUp from 'hooks/useUseEffectCleanUp';

import Title from '../components/Title';
import Box from '../components/Box';
import Menu from './Menu';

const Previous = (props) => {

    const localStorageRoomPrevious = JSON.parse(localStorage.getItem("room-previous"));

    const [previousRooms, setPreviousRooms] = useState(localStorageRoomPrevious || []);
    
    const onDelete = (index) => () => {
        const newPreviousRooms = [...previousRooms];
        newPreviousRooms.splice(index, 1);
        localStorage.setItem("room-previous", JSON.stringify(newPreviousRooms));
        setPreviousRooms(newPreviousRooms);
    };

    const {openValue, setOpenValue} = useOpen();

    useUseEffectCleanUp(() => { setOpenValue("") })

    props = {
        ...props,
        onDelete
    }

    return ( !!previousRooms.length &&
        <section className={styles.container}>

            <Title left="Previous" right={`${previousRooms.length} Room`} />

            <div className={styles.map}>
                {previousRooms.map((el, i) => 
                    <ContextMenu key={el._id} id={el._id} open={openValue} setOpen={setOpenValue} menu={<Menu {...props} element={el} index={i} />}>
                        <Box
                            icon={<MdArrowBackIosNew/>} 
                            link={el.room} 
                            text={el.room} 
                            button={<button onClick={onDelete(i)} className={styles.deleteBtn}><FaRegTrashAlt/></button>}
                        />
                    </ContextMenu>
                )}
            </div>

        </section>
    )
}

export default Previous