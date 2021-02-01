import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'universal-cookie/es6';

const httpLink = createHttpLink({
    uri: 'ec2-34-229-74-246.compute-1.amazonaws.com:4000/graphql',
  });
  
  
  const cookie = new Cookies()
  const authLink = setContext((_, { headers }) => {
    
   const token = cookie.get('authorization')
   
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      }
    }
  });
  
  
  
  export const client = new ApolloClient({
    link: authLink.concat(httpLink) ,
    uri: "34.229.74.246:4000/graphql",
  
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
  