import { useMutation } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import React, {useState } from "react"
import styled from "styled-components"

import { authorization, registration } from "../graphql/user";

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
 
export const Reg = () => {
    const [register] = useMutation(registration)
    return(
      <Container>
          <div style={{textAlign: 'center'}}>
              Регистрация
          </div>
         <FormContainer>
          <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={async (values) => {
                await register({variables: {username: values.username, password: values.password}})
            }
          }
          >
              <Form>
                <Field name="username" type="text" />
                <Field name="password" type="password" />
                <ButtonSignIn type="submit">Go</ButtonSignIn>
              </Form>
          </Formik>
         </FormContainer>
           
             
       
    
      </Container>
    )
}