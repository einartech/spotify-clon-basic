import React from 'react'

 //import HomeIcon from '@mui-ui/icons-material/home';
 import { faCheckSquare,FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import {SidebarContainer,SidebarChoice} from './styles';

const Sidebar = () => {
    return (

        <SidebarContainer>
             <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg" alt="logo" />
            <SidebarChoice title="Home" Icon={faCoffee}/>
            {/* <SidebarChoiceT title="Homeh" Icon={AccessAlarmIcon}/> */}
        </SidebarContainer>



    )
}

export default Sidebar;
