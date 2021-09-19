import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


import { SpotifyBody } from './styles';


const Player = () => {
    return (
        <div>
        
        <SpotifyBody>
            <Sidebar/>
                <Body/>
        </SpotifyBody>
        
        <Footer/>

        </div>
    )
}

export default Player
