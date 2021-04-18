import { GraphQLServer } from "graphql-yoga";

//Type definitions (Schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
    }
`;

//Resolvers
const resolvers = {
  Query: {
    hello() {
      return "First query";
    },
    name() {
      return "Sagar Adval";
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server started!");
});
