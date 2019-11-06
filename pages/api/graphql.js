import { ApolloServer, gql } from 'apollo-server-micro';

//define the available api queries
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`
//What happens when you actually make the query
const resolvers = {
  Query: {
    sayHello:  () => {
      return 'Hello World!'
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers});

export const config = {
  api: {
    bodyParser: false
  }
}


export default apolloServer.createHandler({ path: '/api/graphql'});
