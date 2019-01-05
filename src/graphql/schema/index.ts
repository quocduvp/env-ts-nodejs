import { buildSchema } from "graphql";

let userSchema = `
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
`

let schema = buildSchema(`
    ${userSchema}

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
`)

export default schema