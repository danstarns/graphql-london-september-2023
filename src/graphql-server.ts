import { createYoga } from "graphql-yoga";
import http from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
    type User {
      id: ID!
      name: String!
    }
    
    type Query {
      users: [User]!
    }
`;

const resolvers = {
  Query: {
    users: () => [{ id: 1, name: "John Doe" }],
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
});

const server = http.createServer(yoga);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
