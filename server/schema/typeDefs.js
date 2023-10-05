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

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    books: [Book]!
    book(title: String!): Book
    questions: [Question]!
  }

  input UserInfo {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    addUser(input: UserInfo!): User
  }
`;

// Export the typeDefs
module.exports = { typeDefs };
