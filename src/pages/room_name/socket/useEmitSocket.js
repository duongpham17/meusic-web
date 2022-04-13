
export const useEmitSocket = (socket) => {

    /**
     * @param { Object } data - used to update room document
     * @param { string } data.type - enum "add" || "remove"
     * @param { number } data.index - if type is "remove" make sure to add the index
     * @param { string } data.room - the room the user is currently in
     * @param { OBject } data.song - song information that will be push to room songs
    */
    const emitUpdateSong = (data) => {
        socket.emit("updateSong", data);
    };

    /**
     * @param { Object } data - used to update room document
     * @param { number } data.index - if type is "remove" make sure to add the index
     * @param { string } data.room - the room the user is currently in
    */
    const emitChangeSong = (data) => {
        socket.emit("changeSong", data);
    }

    return {
        emitUpdateSong,
        emitChangeSong
    }
}

export default useEmitSocket