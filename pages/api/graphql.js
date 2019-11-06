import { ApolloServer, gql } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';

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
      return 'Hello World!';
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers});

export const config = {
  api: {
    bodyParser: false
  }
}


const server = apolloServer.createHandler({ path: '/api/graphql'});
export default connectDb(server);
