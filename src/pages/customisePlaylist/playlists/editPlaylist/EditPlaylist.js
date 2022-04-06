import React, {useState} from 'react';

import useOpen from 'hooks/useOpen';

import AddButton from './AddSongButton';
import SongList from './SongList';
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

            <SongList {...props} />

            <Songs  {...props} />
               
            {edited && <UpdateButton {...props} setEdited={setEdited} />}

        </>
    );
};

export default EditPlaylist;
