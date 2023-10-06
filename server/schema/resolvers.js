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
    addUser: async (parent, { input }) => {
      try {
        const { name, email, password } = input;
        const existingUser = await User.findOne({ where: { email } });
        if (!existingUser) {
          const hashPassword = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            name,
            email,
            password: hashPassword,
          });
          return newUser;
        } else throw new Error("Username or email is already taken");
      } catch (error) {
        throw new Error(`Problem creating a new user : ${error.message}`);
      }
    },
    login: async (_, { input }) => {
      try {
        const { email, password } = input;
        const user = await User.findOne({ where: { email } });
        if (user) {
          const matchPassword = await bcrypt.compare(
            password.trim(),
            user.password.trim()
          );

          if (matchPassword) return user;
          else throw new Error("password not match");
        } else throw new Error("email not found");
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = { resolvers };
