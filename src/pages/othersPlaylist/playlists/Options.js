import styles from './Options.module.scss';
import React from 'react';

import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {FaRegTrashAlt} from 'react-icons/fa';

import Dropdown from 'components/dropdown';

const Options = (props) => {

  const {element, customisePlaylistSaveOthers, othersPlaylistDelete} = props;

  const onOptionsSelect = (type) => (event) => {
    event.stopPropagation();  
    if(type === "save") customisePlaylistSaveOthers(element);
    if(type === "remove") othersPlaylistDelete(element._id)
  };

  return (
    <div className={styles.container}>
      <Dropdown>
        <ul>
          <li>
            <button onClick={onOptionsSelect("save")}>
              <span>Save</span>
              <BsFillCollectionPlayFill/>
            </button>
          </li>
          <li>
            <button onClick={onOptionsSelect("remove")}>
              <span>Remove</span>
              <FaRegTrashAlt/>
            </button>
          </li>
        </ul>
      </Dropdown>
    </div>
  )
}

export default Options