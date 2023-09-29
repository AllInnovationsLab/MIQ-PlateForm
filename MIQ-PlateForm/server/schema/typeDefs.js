// Correct import statement for gql from apollo-server
const { gql } = require("apollo-server");

// Define your typeDefs using the gql template literal
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(title: String): Book
  }
`;

// Export the typeDefs
module.exports = { typeDefs };
