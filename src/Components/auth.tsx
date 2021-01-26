import { useMutation } from "@apollo/client";
import React, {useState } from "react"
import styled from "styled-components"

import { authorization } from "../graphql/user";

const Container = styled.div`
    margin: auto;
    width:300px;
    height: 300px;
    background-color: #DCDCDC;
    border-radius: 60px;
`;

const FormContainer = styled.div`
    padding-top: 50px;
    padding-left: 75px;
`

const ButtonSignIn = styled.button`
    margin-top: 50px;
    margin-left: 50px;
`
 
export const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useMutation(authorization)
    const eventHandler = async (event: any) => {
        event.preventDefault()
        
        await login({variables: {username: username, password: password}})
       
    }
    return(
      <Container>
          <div style={{textAlign: 'center'}}>
              Авторизация
          </div>
         <FormContainer>
          <form onSubmit={eventHandler} >
          <label>Логин:</label><br/>
          <input 
          placeholder="username" 
          name='username' 
          value={username}
          type="username"
          onChange={(event) => setUsername(event.target.value)}
          /> <br/>
          <br/>
          <label>Пароль:</label><br/>
          <input 
          placeholder="password" 
          name='password' 
          value={password}
          type='password'
          onChange={(event) => setPassword(event.target.value)}
          /> <br/>

            <ButtonSignIn type="submit">Sign</ButtonSignIn>

          </form>
         </FormContainer>
           
             
       
    
      </Container>
    )
}