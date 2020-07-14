import gql from "graphql-tag";

const USER_PROP = gql`
    fragment UserProps on User {
        id
        firstname
        lastname
        email
        admin
        phone
        created_at
        wallet_address
        address
        gender
        nationality
        dob
        verified
        image
        
    }
`;
export const LOGIN = gql`
    mutation Login($email: String!, $password: String!, $option: LoginOption!) {
        Login(email: $email, password: $password, option: $option) {
            message
            doc {
                ...UserProps
            }
            token
        }
    }
    ${USER_PROP}
`;
