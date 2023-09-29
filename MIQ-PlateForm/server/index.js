// npm install apollo-server graphql
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const cors = require("cors");

// interface MyContext {
//   token?: String;}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "https://studio.apollographql.com",
    credentials: true,
  },
  //   context: async ({ req }) => ({ token: req.headers.token }),
});
(async () => {
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
})();
