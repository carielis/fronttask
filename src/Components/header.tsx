import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import styled from "styled-components"
import Cookies from "universal-cookie/es6";

const Container = styled.div`
    display: flex;
    background-color: #666666;
    height: 5vh;
    flex-direction: row;
    
`;

const Linked = styled.div`
 padding: 15px;
 color: white;  
`

export const Header = () => {
    const cookie = new Cookies()
    const [ redirected, setRedirect ] = useState<boolean>(false)
    const token = cookie.get('authorization')
    console.log(token);
    
    return(
        <Container>
          {cookie.get('authorization') === undefined ? 
            <>
            <Link to="/login" style={{textDecoration: 'none', fontWeight: 'bold'}}> <Linked>LOGIN</Linked> </Link>
            <Link to="/registration" style={{textDecoration: 'none', fontWeight: 'bold'}}> <Linked>REGISTRATION</Linked> </Link>  
            </> :
            
            <>
            <Linked onClick={() => {
                cookie.remove('authorization')
                cookie.remove('username')
                setTimeout(() => {
                    setRedirect(true)
                    window.location.reload();
                    
                }, 0)
                }} style={{textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer'}}> LOGOUT </Linked>
            <Link to="/chat" style={{textDecoration: 'none', fontWeight: 'bold'}}> <Linked>CHAT</Linked> </Link>
            </>
        }
            {redirected && <Redirect to='/login' />}
         
        </Container>
    )
}