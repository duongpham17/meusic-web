import React from 'react';

import {MdDragHandle} from 'react-icons/md';

import BigButton from '../component/BigButton';

export const Reorder = (props) => {

    const {setReorder, reorder} = props;
    const onReorder = () => setReorder(!reorder);

    return (
        <div>
            <BigButton description="Reorder" onClick={onReorder} icon={<MdDragHandle />} />
        </div>
    )
}

export default Reorder;