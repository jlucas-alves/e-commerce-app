const { typeDefs } = require("./schema");
const { ApolloServer, gql } = require("apollo-server");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at" + url);
});
