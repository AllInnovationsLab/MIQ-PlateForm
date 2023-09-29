// npm install apollo-server graphql
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const db = require("./models/index");
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
  context: { db },
});
(async () => {
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
})();
// db.connect()
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err.message));
