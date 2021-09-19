import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';

import { SpotifyBody } from './styles';


const Player = () => {
    return (
    <SpotifyBody>
        <Sidebar/>
            <Body/>
                <p>player</p>      
    </SpotifyBody>
    )
}

export default Player
