import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    font-size: 26;
 
`
export const Header = () => {
    return(
        <div style={{backgroundColor: '#CCCCCC'}}>
            <Link to='/registration'><a>Rega</a></Link>
            <Link to='/chat'><a>Chat</a></Link>
            <Link to='/login'><a>Login</a></Link>
        </div>
    )
}