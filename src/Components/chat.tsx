import {  useMutation, useQuery } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import { get } from "lodash";
import React, { useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router";

import styled from "styled-components"
import Cookies from "universal-cookie/es6";



import { getMessages, sendMessage } from "../graphql/user";

const Container = styled.div`
    margin: auto;
    width:1000px;
    height: 600px;
    background-color: #DCDCDC;
    border-radius: 60px;
`;

const FormContainer = styled.div`
    padding-top: 50px;
    padding-left: 75px;
`

const ButtonSignIn = styled.button`
    position: absolute;
    outline: none;
    border-width: 0px;
    right: 70px;
    top: -25px;
    height: 70px;
    margin-left: 50px;
    :hover {
        background-color: greenyellow;
    }
`

const FormField = styled(Field)`

 font-size: 30px;
 border: 10px solid rgba(255, 255, 255, .5);

 
 outline: none;
 color: #333;
 width: 782px;
 height: 44px;
 margin-top: -23px;


  
   
`
 
export const Chat = () => {
    const {loading, data} = useQuery(getMessages, {
        pollInterval: 200,
    })
    const [send] = useMutation(sendMessage)
    const history = useHistory()

    const cookie = new Cookies()

   
    
    const msg = get(data,'message',{})
    const token = cookie.get('authorization')
    const user = cookie.get('username')
  

    const divRref: any = useRef(null);
    
  
    
    return(
      <>
      
      {!token || !user ? history.push('/login') : 
      <Container>
      <div style={{textAlign: 'center'}}>
          Чат
      </div>
      <div ref={divRref}  style={{ width: 900, height: 450, overflow: "auto" , margin:"auto", marginTop: 30}}>
          {loading ? <>LOADING</> :
            msg.map((item: any) => <div key={item.id}>
                <div
                
                style={{backgroundColor:  user === item.author.username ? '#996AD6' : "#C062D3", 
                    display: 'flex', 
                    flexDirection: 'column',
                    marginBottom: 10,
                    justifyContent:  user === item.author.username ? "" : 'flex-start' ,
                    borderRadius: 10, 
                    marginLeft: user === item.author.username ? 450 : 0,
                    marginRight: user === item.author.username ? 0 : 450,
                    padding: 8}}
                    >
                     
                    <div>{item.author.username}</div>
                    <div>{item.message}</div>
                </div >
            </div> )
          }
        
      
        
      </div>
     <FormContainer>
     <Formik 
          initialValues={{message: ''}}
          onSubmit={async (values, actions) => {
            await send({variables: {message: values.message}})
            actions.resetForm()
          }}
          >
        <Form style={{position: 'relative'}}>
          <FormField name="message" type="text" />

          <ButtonSignIn type="submit">Send</ButtonSignIn>
        </Form>
          </Formik>
     </FormContainer>
   
  </Container>
      }
      </>
    )
}