import React from 'react';

import {MdDragHandle} from 'react-icons/md';

import BigButton from '../component/BigButton';

export const Reorder = (props) => {

    const {onOpenValue} = props;

    return (
        <div>
            <BigButton description="Reorder" onClick={() => onOpenValue("reorder")} icon={<MdDragHandle />} />
        </div>
    )
}

export default Reorder;