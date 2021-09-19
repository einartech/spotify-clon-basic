import React from 'react'

import {LoginContainer,LoginButton} from "./styles"

const loginURL="https://accounts.spotify.com/authorize?client_id=9290fd4f4f7445adabf11ef97990485a&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state"


//Login Component to App
const Login = () => {
    return (
        <LoginContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg" alt="logo"></img>
            <LoginButton href={loginURL}>Log in with spotify</LoginButton>
        </LoginContainer>
    )
}

export default Login
