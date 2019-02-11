import { gql } from "apollo-server";

let typeDefs = gql`
    type User{
        first_name: String!
        last_name: String!
        age: Int!
    }

    input UserCreate{
        first_name: String!
        last_name: String!
        age: Int!
    }

    type RootQuery{
        users: [User!]!
    }

    type RootMutation{
        createUser(user: UserCreate) : User
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`

export {typeDefs}