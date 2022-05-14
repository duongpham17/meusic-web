import styles from './EditMode.module.scss';
import React from 'react';
import {MdEdit, MdContentCopy} from 'react-icons/md';
import {BsMusicNoteList} from 'react-icons/bs';
import {FaRegTrashAlt} from 'react-icons/fa';
import Dropdown from 'components/dropdown';


const EditMode = (props) => {

    const {element, setEditMode, setSelectedPlaylist, customisePlaylistDuplicate, dropdown} = props;

    const onShowEditList = (event) => {
        event.stopPropagation();
        setSelectedPlaylist(element);
    };

    const onSelectEdit = (type) => (event) => {
        event.stopPropagation();
        setEditMode(type);
    };

    const onDuplicate = (event) => {
        event.stopPropagation();
        customisePlaylistDuplicate(element);
    };

    return (
        <div className={styles.container} onClick={e => e.stopPropagation()}>

            <Dropdown dropdown={dropdown}>

                <ul onMouseEnter={onShowEditList}>
                    <li>
                        <button onClick={onSelectEdit("editPlaylist")}>
                            <span>Edit</span>
                            <BsMusicNoteList />
                        </button>
                    </li>
                    <li>
                        <button onClick={onSelectEdit("renamePlaylist")}>
                            <span>Rename</span>
                            <MdEdit />
                        </button>
                    </li>
                    <li>
                        <button onClick={onDuplicate}>
                            <span>Duplicate</span>
                            <MdContentCopy />
                        </button>
                    </li>
                    <li>
                        <button onClick={onSelectEdit("deletePlaylist")}>
                            <span>Delete</span>
                            <FaRegTrashAlt />
                        </button>
                    </li>
                </ul>

            </Dropdown>
        

        </div>
    )
}

export default EditMode