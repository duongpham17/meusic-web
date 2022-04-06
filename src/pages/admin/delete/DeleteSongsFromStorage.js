import React from 'react';
import useComponents from '../useComponents';

const DeleteSongsFromStorage = (props) => {

    const {adminDeleteAllFromStorage} = props;

    const {DeleteComp, onRequest} = useComponents();

    const onDelete = async () => await onRequest(adminDeleteAllFromStorage);

    return (
        <DeleteComp description="Nft.storage clean songs" request={onDelete} />
    )
}

export default DeleteSongsFromStorage