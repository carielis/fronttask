import { gql } from '@apollo/client';
export const authorization = gql`
    mutation($username: String!, $password: String!){
        login(username: $username, password: $password) {
            token
        }
    }
`

export const registration = gql`
    mutation register($username: String!, $password: String!){
        register(username: $username, password: $password) {
            username
        }
    }
`

// export const getMessage = gql`
//     query {
//         message{
//             message
//         }
//     }
// `