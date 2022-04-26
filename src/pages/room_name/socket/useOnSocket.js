import {useState, useEffect} from 'react';

export const useOnSocket = (socket) => {

    const [roomData, setRoomData] = useState("");
    const [roomUsers, setRoomUsers] = useState([]);
    const [roomPlaying, setRoomPlaying] = useState("");

    useEffect(() => {
        socket.on("joinedRoom", (data) => {
            setRoomData(data);
            setRoomUsers(data.online);
        });

        socket.on("leftRoom", (data) => {
            setRoomUsers(data.online);
        });

        socket.on("changedSong", (data) => {
            const song = {
                ...data.songs[data.index],
                index: data.index
            }
            setRoomPlaying(song);
        });

        socket.on("updatedSong", (data) => {
            setRoomData(data)
        });
    }, [socket]);

    useEffect(() => {
        return () => {
            setRoomData("")
            setRoomUsers([]);
            setRoomPlaying("");
        }
    }, [])

    return {
        roomData,
        setRoomData,
        roomUsers,
        setRoomUsers,
        roomPlaying,
        setRoomPlaying
    }
}

export default useOnSocket