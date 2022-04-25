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

  const Item = ({description, option, icon}) => (
    <li>
      <button onClick={onOptionsSelect(option)}>
        <span>{description}</span>
        {icon}
      </button>
    </li>
  );

  return (
    <div className={styles.container}>
      <Dropdown>
        <ul>
          <Item description="Save" icon={<BsFillCollectionPlayFill/>} option={"save"} />
          <Item description="Remove" icon={<FaRegTrashAlt/>} option={"remove"} />
        </ul>
      </Dropdown>
    </div>
  )
}

export default Options