const users: Array<any> = [{
    first_name: "Nguyen",
    last_name: "Du",
    age: 20
}]
const userResolve = {
    RootQuery: {
        users: async (self : any, agrs : any, req: any) => {
            return users
        },
    },
    RootMutation: {
        createUser: (self : any, agrs : any, req: any) => {
            const user = agrs.user
            users.push(user)
            return user
        }
    }
}

export {userResolve}