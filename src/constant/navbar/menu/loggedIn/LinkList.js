import React from 'react';
import {BsSun, BsPerson} from 'react-icons/bs';
import {MdPrivacyTip} from 'react-icons/md';
import {FaUserFriends} from 'react-icons/fa'


const LinkList = [
    {
        id: 0,
        icon: <BsPerson/>,
        name: "Profile",
        link: "/profile"
    },
    {   
        id: 1,
        icon: <BsSun/>,
        name: "Theme",
        link: "/theme"
    },
    {
        id: 2,
        icon: <FaUserFriends/>,
        name: "Others",
        link: "/others"
    },
    {   
        id: 3,
        icon: <MdPrivacyTip/>,
        name: "Policy",
        link: "/policy"
    },
]

export default LinkList;