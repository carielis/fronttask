import { useMutation } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import React, {useState } from "react"
import styled from "styled-components"
import Cookies from "universal-cookie/es6";

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
 
export const Chat = () => {

    return(
      <Container>
          <div style={{textAlign: 'center'}}>
              Авторизация
          </div>
         <FormContainer>
         123
         </FormContainer>
           
             
       
    
      </Container>
    )
}