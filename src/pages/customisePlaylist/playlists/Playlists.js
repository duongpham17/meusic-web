import styles from './Playlists.module.scss';
import React from 'react';

import Element from './element/Element';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { generateid } from 'utils/generateid';

export const Playlists = (props) => {

    const { customisePlaylist, customisePlaylistReorder, reorder } = props;

    const { playlist } = customisePlaylist;

    const onReorder = (array, index_one, index_two) => {
        const newData = [...array];
        const selected = newData[index_one];
        newData.splice(index_one, 1);
        newData.splice(index_two, 0, selected);
        return newData;
    }

    const onDragEnd = (e) => {
        if(!e.source || !e.destination) return;
        const [source, destination ]= [e.source.index, e.destination.index];
        let newOrder = onReorder(customisePlaylist.playlist, source, destination)
        customisePlaylistReorder(newOrder);
    };

    return (
        <div className={styles.container}>

            {reorder && 
                <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
                    <Droppable droppableId="droppable-1">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                                {playlist.map((el, i) => 
                                    <Draggable key={generateid()} draggableId={`draggable-${i}`} index={i}>
                                        {(provided, snapshot) => (
                                            <div className={`${styles.element} ${styles.reorder} ${snapshot.isDragging && styles.isDragging}`} ref={provided.innerRef} {...provided.draggableProps}>
                                                <Element {...props} provided={provided} element={el} />
                                            </div>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            }

            {!reorder && playlist.map((el) => 
                <div className={styles.element} key={el._id}>
                    <Element {...props} element={el} />
                </div>
            )}
            
        </div>
    );
};

export default Playlists