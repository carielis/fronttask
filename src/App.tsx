import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';

import {  ApolloProvider} from '@apollo/client';
import { client } from './graphql/config';

import { Auth } from './Components/auth';
import { Header } from './Components/header';
import { Reg } from './Components/registration';
import { Chat } from './Components/chat';






const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 95vh;

  background-color: purple;

`

function App() {

  return (
    <ApolloProvider client={client}>
      
    <Header />

    <Root>
    
   
    <Route  path='/login' component={Auth} />
    
    <Route  path='/registration' component={Reg} />
    <Route  path='/chat' component={Chat} />
 
   
    </Root>
    
    </ApolloProvider>
  );
}

export default App;
