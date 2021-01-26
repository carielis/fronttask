import { gql } from '@apollo/client';
export const authorization = gql`
    mutation {
        login(username: username, password: password) {
            id
            token
        }
    }
`

export const getMessage = gql`
    query {
        message{
            message
        }
    }
`