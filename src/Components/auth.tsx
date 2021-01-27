import { useMutation } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react"
import { Redirect } from "react-router";
import styled from "styled-components"
import Cookies from "universal-cookie/es6";

import { authorization } from "../graphql/user";

const Container = styled.div`
  background-color: white;
  width: 500px;
  margin: auto;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
`;

const FormContainer = styled.div`


`

const InputField = styled(Field)`
 border-width: 0;
 border-radius: 10px;
 height: 25px;
 width: 150px;
 font-weight: bold;
 font-size: 20px;
 outline: none;
 :focus {
  transition: all 0.5s;
  padding-left: 10px;
  border: 0.1px solid blue;
    border-radius: 15px;
 }
`

const ButtonSubmit = styled.button`
    outline: none;
    border: 0px;
    margin-bottom: 20px;
    background-color: black;
    color: white;
    width: 80px;
    height: 30px;
    font-weight: bold;
    border-radius: 5px;
    :hover {
        transition: all 0.3s;
        background-color: #9900FF;
        border-radius: 10px;
        
    }
`
 
export const Auth = () => {
    const cookies = new Cookies();
    const [ redirect, setRedirect ] = useState<boolean>(false)
    const [login] = useMutation(authorization)
    return(
      <Container>
          <div>
              Авторизация
          </div>
         <FormContainer>
          <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={async (values) => {
                const {data} = await login({variables: {username: values.username, password: values.password}})
                if (data.login === null) {
                    alert('Неверный логин или пароль')
                }
                if (data.login !== null) {
                    await setTimeout(async () => {
                        await cookies.set('authorization', data.login.token)
                        await cookies.set('username', data.login.username)
                        setRedirect(true)
                        window.location.reload();
                        
                    }, 0)
                }
                
             
            }
          }
          >
              <Form>
              <div style={{marginBottom: 30}}>
                    Логин: <br />
                <InputField name="username" type="text" />
                </div>
                <div style={{marginBottom: 30}}>
                    Пароль: <br />
                <InputField name="password" type="password" />
                </div>
                
                <ButtonSubmit type='submit'>Button</ButtonSubmit>
              </Form>
          </Formik>
         </FormContainer>
         {redirect && <Redirect to='/chat' />}
             
       
    
      </Container>
    )
}
