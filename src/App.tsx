import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

import { Auth } from './Components/auth';
import { Chat } from './Components/chat';


const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: purple;
  height: 100vh;
  


`

function App() {
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
  return (
    <ApolloProvider client={client}>
    <Root>
    <Auth />
    </Root>
    </ApolloProvider>
  );
}

export default App;
