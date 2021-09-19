import styled from 'styled-components'

//Styled Components Definition of Variables+CSS
const LoginContainer = styled.div`
display:grid;
place-items:center;
height: 100vh;

background-color: #000;

& img {
    width:100%;
}
`
//-HINT-//& ChildComponent {CssToChildComponent}


const LoginButton = styled.a`
padding: 20px;
background-color:#1db954;
border-radius: 90px;
color: white;
text-decoration:none;
text-transform: uppercase;
font-weight:bolder;
`

export{LoginContainer,LoginButton}
