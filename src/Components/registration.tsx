import { useMutation } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react"
import { Redirect, useHistory } from "react-router";
import styled from "styled-components"
import Cookies from "universal-cookie/es6";


import { registration } from "../graphql/user";
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
position: relative;
 border-width: 0;
 border-radius: 10px;
 height: 25px;
 width: 115px;
 font-weight: bold;

 font-size: 20px;
 outline: none;
 margin: 10px;
 margin-right: 15px;
 background-color: #CCCCCC;
 border: 0.1px solid black;
 padding-left: 10px;
 padding-right: 30px;
 :focus {
  transition: all 0.5s;
  
  border: 0.3px solid blue;
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

export const Reg = () => {
    const cookies = new Cookies();
    enum eyes {
        show="text",
        hide="password",
    }
    const [register] = useMutation(registration)
    const [ redirect, setRedirect ] = useState<boolean>(false)
    const [ eye, setEye] = useState(eyes.hide)
    const history = useHistory()
    return(
      <Container>
          <div style={{textAlign: 'center'}}>
              Регистрация
          </div>
         <FormContainer>
          <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={async (values) => {
          
                    const {data} = await register({variables: {username: values.username, password: values.password}})
                    if (data.register === null) {
                        alert('Логин занят')
                    }
                    if(data.register !== null) {
                        await setTimeout(async () => {
                            history.push('/login')
                            
                        }, 0)
                    }
                
            }
          }
          >
              <Form>
                <InputField name="username" type="text" />
                <div style={{position: 'relative'}}>
                <InputField style={{color: eye === eyes.show ? 'black' : 'grey' }} name="password" type={eye} />
                <div onClick={() => {
                    if(eye === eyes.show) setEye(eyes.hide)
                    if(eye === eyes.hide) setEye(eyes.show)
                } }>
                {eye === eyes.hide ? 
                <img style={{width: 25, position: "absolute", zIndex: 10, top: 12, right: 175 }} src="https://img.icons8.com/wired/64/000000/angry-eye.png"/> :
                <img style={{width: 25, position: "absolute", zIndex: 10, top: 12, right: 175 }} src="https://img.icons8.com/dusk/64/000000/angry-eye.png"/>
            }
                </div>
                </div>
                <ButtonSubmit type="submit">Go</ButtonSubmit>
                
              </Form>
          </Formik>
         </FormContainer>
          
             
       
    
      </Container>
    )
}