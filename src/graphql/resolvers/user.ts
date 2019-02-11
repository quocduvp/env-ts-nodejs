const users: Array<any> = [{
    first_name: "Nguyen",
    last_name: "Du",
    age: 20
}]
const userResolve = {
    RootQuery: {
        users: () => {
            return users
        },
    },
    RootMutation: {
        createUser: (args: any) => {
            const user = args.user
            users.push(user)
            return user
        }
    }
}

export {userResolve}