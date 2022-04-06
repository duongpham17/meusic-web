import styles from './Pages.module.scss';
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Private from 'routing/private';

import Theme from './theme';

import Policy from './policy';

import Login from './authentication/login';
import Signup from './authentication/signup';
import Confirm from './authentication/confirm';

import Admin from './admin';
import Home from './home';
import Profile from './profile';
import Room from './room';
import RoomName from './room:name';
import OthersPlaylist from './othersPlaylist';
import SavedPlaylist from './savedPlaylist';
import CustomisePlaylist from './customisePlaylist';
import Unknown from './unknown';

export const Pages = () => 
(
    <div className={styles.container}>
        <Routes>
            <Route exact path="/" element={<Home/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/confirm/:code" element={<Confirm/>} />

            <Route path="/policy" element={<Policy/>} />
            <Route path="/theme" element={<Theme/>} />

            <Route path="/profile" element={<Private component={Profile} /> } /> 
            <Route path="/saved" element={<Private component={SavedPlaylist} /> } /> 
            <Route path="/others" element={<Private component={OthersPlaylist} /> } /> 
            <Route path="/customise" element={<Private component={CustomisePlaylist} /> } />
            <Route path="/room" element={<Private component={Room} /> } /> 
            <Route exact path="/room/:room" element={<Private component={RoomName} /> } />

            <Route path="/admin" element={<Private component={Admin} role={["admin"]} /> } />
            
            <Route path="*" element={<Unknown />} />  
        </Routes>
    </div>
)

export default Pages;