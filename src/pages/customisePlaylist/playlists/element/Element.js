import styles from './Element.module.scss';
import React, {useState} from 'react';

import {MdDragHandle} from 'react-icons/md';

import ContextMenu from 'components/contextMenu';

import EditPlaylist from '../editPlaylist';
import ViewPlaylist from '../viewPlaylist';
import DeletePlaylist from '../deletePlaylist';
import RenamePlaylist from '../renamePlaylist';

import Overview from './Overview';
import EditMode from './EditMode';
import useUseEffectCleanUp from 'hooks/useUseEffectCleanUp';

export const Element = (props) => { 

    const {element, provided, openValue} = props;

    const [selectedPlaylist, setSelectedPlaylist] = useState("");
    const [editMode, setEditMode] = useState("");
    const [openContextMenu, setOpenContextMenu] = useState(false);

    const onViewPlaylist = (song) => () => {
        if(!element.song.length) return setEditMode("");
        if(editMode === "viewPlaylist") return setEditMode("");
        setEditMode("viewPlaylist");
        setSelectedPlaylist(song);
    };

    useUseEffectCleanUp(() => { setOpenContextMenu("") });

    props = {
       ...props,
        selectedPlaylist, 
        setSelectedPlaylist,
        editMode,
        setEditMode
    };

    return (
        <div className={styles.container}>

            {!openValue && 
                <ContextMenu id={element._id} open={openContextMenu} setOpen={setOpenContextMenu} menu={<EditMode {...props} dropdown={false}/>}>
                    <div className={styles.overview} onClick={onViewPlaylist(element)}>
                            <Overview {...props}/>
                            
                            <EditMode {...props}/>
                    </div>
                </ContextMenu>
            }

            <div>
                {editMode === "viewPlaylist" && 
                    <ViewPlaylist {...props} />
                }
                {editMode === "editPlaylist" &&
                    <EditPlaylist {...props} /> 
                }
                {editMode === "renamePlaylist" && 
                    <RenamePlaylist {...props} />
                }
                {editMode === "deletePlaylist" && 
                    <DeletePlaylist {...props} />
                }
            </div>

            {openValue === "reorder" && 
                <div className={styles.overview} {...provided.dragHandleProps}>
                    <Overview {...props}/>
                    <div className={styles.dragArea}> <MdDragHandle/> </div>
                </div>
            }

    </div>
);
}

export default Element;