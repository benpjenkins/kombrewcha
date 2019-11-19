import { ApolloServer, gql } from "apollo-server-micro";
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
import connectDb from "../../lib/mongoose";
import { batchesResolvers } from "../../api/batches/resolvers";
import { batchesMutations } from "../../api/batches/mutations";
import Batches from "../../api/batches/Batches.graphql";

//define the available api queries
const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`;
//What happens when you actually make the query
const fakeResolvers = {
  Query: {
    sayHello: () => {
      return "Hello Kombucha!";
    }
  }
};

const resolvers = mergeResolvers([
  fakeResolvers,
  batchesResolvers,
  batchesMutations
]);

const typeDefs = mergeTypeDefs([fakeTypeDefs, Batches]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

const server = apolloServer.createHandler({ path: "/api/graphql" });
export default connectDb(server);
