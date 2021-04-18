import { GraphQLServer } from "graphql-yoga";

//Type definitions (Schema)
const typeDefs = `
    type Query {
        userData: User!
        greeting(name: String): String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        age: Int
    }
`;

//Resolvers
const resolvers = {
  Query: {
    userData() {
      return {
        id: "12309anafhqwo21",
        name: "Sagar",
        email: "alfj@gm.com",
        // password: "aslfkjasf",
      };
    },
    greeting(parent, args, context, info) {
      return `Hello ${args.name}`;
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
