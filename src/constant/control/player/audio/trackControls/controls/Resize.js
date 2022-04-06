import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

import Dropdown from '../components/Dropdown';

const Resize = (props) => {

    const {onOpen} = props;

    return (
        <Dropdown button={
            <button onClick={onOpen}>
                <MdKeyboardArrowDown/>
            </button>
        } />
    )
}

export default Resize