import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from './Components/auth';
import { Header } from './Components/header';
import { Reg } from './Components/registration';
import { Chat } from './Components/chat';





const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: purple;
  height: 100vh;
  


`
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'all'
    }
  }
})



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
