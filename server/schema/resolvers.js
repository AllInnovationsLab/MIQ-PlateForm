const { dummyBooks } = require("./dummy");
const db = require("../models/index");
const ReactQuestion = db.reactQuestion;
const User = db.users;
const bcrypt = require("bcrypt");

const _ = require("lodash");
const resolvers = {
  Query: {
    books: () => dummyBooks,
    book: (parent, args) => {
      const title = args.title;
      return _.find(dummyBooks, { title });
    },
    questions: async () => {
      try {
        const questions = await ReactQuestion.findAll();
        return questions;
      } catch (error) {
        throw new Error(`Error fetching questions: ${error.message}`);
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const { name, email, password } = args;
        const existingUser = await User.findOne({ where: { email } });
        if (!existingUser) {
          const hashPassword = await bcrypt.hash(password, 10);
          await User.create({ name, email, password: hashPassword });
        } else throw new Error("Username or email is already taken");
      } catch (error) {
        throw new Error(`Problem creating a new user : ${error.message}`);
      }
    },
  },
};

module.exports = { resolvers };
