import React, {useState} from 'react';

import useOpen from 'hooks/useOpen';

import AddButton from './AddSongButton';
import SavedPlaylist from './SavedPlaylist';
import Songs from './Songs';
import UpdateButton from './UpdateButton';

const EditPlaylist = (props) => {

    const [edited, setEdited] = useState(false);

    const {open, onOpen} = useOpen();
    
    props = {
        ...props,
        setEdited,
        edited,
        open, 
        onOpen
    };

    return (
        <>

            <AddButton {...props} />

            {edited && <UpdateButton {...props} setEdited={setEdited} />}

            <SavedPlaylist {...props} />

            <Songs  {...props} />
            
        </>
    );
};

export default EditPlaylist;
