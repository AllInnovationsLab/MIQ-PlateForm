// Correct import statement for gql from apollo-server
const { gql } = require("apollo-server");

// Define your typeDefs using the gql template literal
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    simularBooks: [Book]
  }
  type Question {
    id: ID!
    question: String!
    option1: String!
    option2: String!
    option3: String!
    answer: String!
  }

  type Query {
    books: [Book]!
    book(title: String!): Book
    questions: [Question]!
  }
`;

// Export the typeDefs
module.exports = { typeDefs };
