import React from 'react';
import {BsFillHouseFill, BsMusicNote, BsFillCollectionPlayFill, BsFillShareFill, BsSun, BsDownload} from 'react-icons/bs';
import {FaCouch} from 'react-icons/fa';

const ControlListLoggedOut = [
    {
        id: 1,
        icon: <BsFillHouseFill/>,
        name: "",
        link: "/",
        keyboard: "Press Ctrl + 2",
    },
    {   
        id: 2,
        icon: <BsSun/>,
        name: "Theme",
        link: "/theme",
    },
]

const ControlListLoggedIn = [
    {
        id: 1,
        icon: <BsFillHouseFill/>,
        name: "",
        link: "/",
        keyboard: "Press Ctrl + 2",
        type: "link"
    },
    {
        id: 2,
        icon: <BsMusicNote/>,
        name: "Saved",
        link: "/saved",
        keyboard: "Press Ctrl + 3",
        type: "link"
    },
    {
        id: 3,
        icon: <BsFillCollectionPlayFill/>,
        name: "Customise",
        link: "/customise",
        keyboard: "Press Ctrl + 4",
        type: "link"
    },
    {
        id: 4,
        icon: <BsFillShareFill/>,
        name: "Others",
        link: "/others",
        keyboard: "Press Ctrl + 5",
        type: "link"
    },
    {
        id: 5,
        icon: <FaCouch/>,
        name: "Room",
        link: "/room",
        keyboard: "Press Ctrl + 6",
        type: "link"
    },
    {
        id: 6,
        icon: <BsDownload/>,
        name: "Download",
        link: "",
        keyboard: "Press Ctrl + 1",
        type: "button"
    },
]

export {ControlListLoggedIn, ControlListLoggedOut};