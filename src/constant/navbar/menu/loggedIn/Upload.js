import React from 'react';

import {AiOutlineCloudUpload} from 'react-icons/ai';

const Download = (props) => {

    const {utilsOpenContent, onOpen} = props;

    const onClick = () => {
        onOpen();
        utilsOpenContent("upload");
    };

    return (
        <div>
            <button onClick={onClick}>
                <span><AiOutlineCloudUpload/></span>
                <span>Upload</span>
            </button>
        </div>
    )
};

export default Download;
