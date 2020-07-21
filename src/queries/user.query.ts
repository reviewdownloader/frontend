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
        referred {
            id
            firstname
            email
            image
            lastname
        }
    }
`;
export const LOGIN = gql`
    mutation Login($email: String!, $password: String!, $option: LoginOption!) {
        Login(email: $email, password: $password, option: $option) {
            message
            doc {
                ...UserProps
                referralCode
            }
            token
        }
    }
    ${USER_PROP}
`;

export const GET_YOUR_REFERRALS = gql`
    query GetYourReferrals {
        GetYourReferrals {
            docs {
                ...UserProps
                referralCode
            }
        }
    }
    ${USER_PROP}
`;

export const UPDATE_IMAGE = gql`
    mutation UpdateProfileImage($path: String!) {
        UpdateProfile(path: $path) {
            message
            doc {
                ...UserProps
                referralCode
            }
        }
    }
    ${USER_PROP}
`;

export const UPDATE_ACCOUNT = gql`
    mutation UpdateAccount($id: ID!, $update: UserUpdateInput!) {
        UpdateAccount(id: $id, update: $update) {
            message
            doc {
                ...UserProps
                referralCode
            }
        }
    }
    ${USER_PROP}
`;
export const UPDATE_PASSWORD = gql`
    mutation UpdatePassword($current: String!, $new: String!) {
        UpdatePassword(password: $new, oldPassword: $current)
    }
`;

export const REQUEST_EMAIL = gql`
    mutation RequestForNewEmail($email: String!) {
        SendEmailModificationRequest(email: $email)
    }
`;
export const UPDATE_EMAIL = gql`
    mutation NewEmail($email: String!, $code: String!) {
        UpdateEmailAddress(email: $email, code: $code) {
            message
        }
    }
`;

export const NEW_ACCOUNT = gql`
    mutation NewAccount($model: UserInput!, $option: OptionInput!, $referral: String) {
        NewUserAccount(model: $model, option: $option, referrer: $referral) {
            message
            doc {
                ...UserProps
            }
            token
        }
    }
    ${USER_PROP}
`;
export const PASSWORD_RESET = gql`
    mutation ResetPassword($email: String!) {
        ResetPassword(email: $email)
    }
`;

export const GET_USERS = gql`
    query GetUsers($page: Int, $limit: Int, $nationality: ID, $user: String) {
        GetUsers(page: $page, limit: $limit, nationality: $nationality, user: $user) {
            docs {
                ...UserProps
            }
            totalDocs
            totalPages
            page
            limit
            nextPage
            prevPage
        }
    }
    ${USER_PROP}
`;

export const GET_SINGLE = gql`
    query GetUser($id: ID!) {
        GetUser(id: $id) {
            doc {
                ...UserProps
                referralCode
            }
        }
    }
    ${USER_PROP}
`;
export const REMOVE_USER = gql`
    mutation DeleteAccount($id: ID!) {
        DeleteAccount(id: $id) {
            message
        }
    }
`;
