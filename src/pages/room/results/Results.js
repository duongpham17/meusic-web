import styles from './Results.module.scss';
import React from 'react';
import useOpen from 'hooks/useOpen';

import ContextMenu from 'components/contextMenu';
import Box from '../components/Box';
import Menu from './Menu';
import useUseEffectCleanUp from 'hooks/useUseEffectCleanUp';

const Results = (props)  => {

    const {searchRoom} = props.roomReducers;

    const {openValue, onOpenValue, setOpenValue} = useOpen();

    const onPreviosUpdate = (data) => () => {
        const room = JSON.parse(localStorage.getItem("room-previous"));

        const noRooms = !room || !room.length;
        
        if(noRooms) return localStorage.setItem("room-previous", JSON.stringify([data]));

        const roomExist = room.some(el => el.room === data.room);

        if(roomExist) return;

        localStorage.setItem("room-previous", JSON.stringify([data, ...room]));
    };

    useUseEffectCleanUp(() => {
        setOpenValue("");
    });

    props = {
        ...props,
        openValue,
        onOpenValue,
        onPreviosUpdate
    };

    return ( searchRoom &&
        <div className={styles.container}>

            <main className={styles.map}>
                {searchRoom.map((el) => 
                <ContextMenu key={el._id} open={openValue} setOpen={setOpenValue} id={el._id} menu={<Menu {...props} element={el} />}>
                        <Box
                            icon={el.private ? "Private" : "Public" } 
                            link={el.room} 
                            text={el.room} 
                        />
                    </ContextMenu>
                )}
            </main>

        </div>
    )
};

export default Results