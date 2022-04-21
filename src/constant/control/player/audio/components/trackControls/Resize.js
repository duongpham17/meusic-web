import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

import Dropdown from '../dropdown';

const Resize = (props) => {

    const {onResize} = props;

    return (
        <Dropdown button={
            <button onClick={() => onResize("close")}>
                <MdKeyboardArrowDown/>
            </button>
        } />
    )
}

export default Resize