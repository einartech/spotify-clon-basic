import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


import { SpotifyBody } from './styles';


const Player = () => {
    return (
        <>
        
        <SpotifyBody>
            <Sidebar/>
                <Body/>
        </SpotifyBody>
        
        <Footer/>

        </>
    )
}

export default Player
