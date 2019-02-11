import fastify from 'fastify'
import { ApolloServer } from 'apollo-server'
import { resolvers,typeDefs } from './graphql'
// firebase configure
import * as admin from 'firebase-admin'
import { credential } from './firebase/credential';

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: credential.client_email,
    privateKey: credential.private_key,
    projectId: credential.project_id
  }),
  databaseURL: "https://chat-app-ff36a.firebaseio.com",
  projectId: "chat-app-ff36a",
  storageBucket: "chat-app-ff36a.appspot.com",
})
const database = admin.database();
const app = fastify({
  logger: true
})
app.register(require('fastify-cors'), {});
app.register(require('fastify-compress'), { global: false });
app.register(require("fastify-response-time"));


app.get('/', async (request : any, reply : any) => {
  return await { hello: 'world' };
})

const apollo = new ApolloServer({
  typeDefs,resolvers,
})
apollo.listen(4001).then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});

const start = async () => {
  try {
    await app.listen(4000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()

export { database }
// admin.initializeApp({
//   credential: admin.credential.cert(credential),
//   databaseURL: "https://chat-app-ff36a.firebaseio.com",
//   projectId: "chat-app-ff36a",
//   storageBucket: "chat-app-ff36a.appspot.com",
// })
// let database = admin.database();
// database.ref('users').set({
//   username: "quocdu",
//   email: "quocduby@gmail.com",
//   profile_picture : ""
// });