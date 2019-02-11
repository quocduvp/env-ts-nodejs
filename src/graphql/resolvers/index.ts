import { userResolve } from "./user";

const resolvers = {
    RootQuery: {
        ...userResolve.RootQuery
    },
    RootMutation: {
        ...userResolve.RootMutation
    }
    
}

export {resolvers}