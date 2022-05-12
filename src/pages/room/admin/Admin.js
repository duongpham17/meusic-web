import styles from './Admin.module.scss';
import React from 'react';

import {FaCouch} from 'react-icons/fa';

import ContextMenu from 'components/contextMenu';

import useOpen from 'hooks/useOpen';
import useApiGet from 'hooks/useApiGet';

import Title from '../components/Title';
import Box from '../components/Box';

import Menu from './menu/Menu';

const Admin = (props) => {

    const {roomGetCreateByMe} = props;

    const {admin} = props.roomReducers;
    
    const {openValue, setOpenValue} = useOpen();

    useApiGet(roomGetCreateByMe, admin.length);

    return ( !!admin.length &&
        <section className={styles.container}>

            <Title left="Admin" right={`${admin.length} Room`} />

            <div className={styles.map}>
                {admin.map((el) => 
                    <ContextMenu key={el._id} id={el._id} open={openValue} setOpen={setOpenValue} menu={<Menu {...props} element={el} dropdown={false}/>}>
                        <Box
                            icon={<FaCouch/>} 
                            link={el.room} 
                            text={el.room} 
                            button={<div className={styles.menu}><Menu {...props} element={el}/></div>}
                        />
                </ContextMenu>
            )}
            </div>

        </section>
    )
}

export default Admin;