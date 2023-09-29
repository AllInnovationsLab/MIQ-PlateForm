const { dummyBooks } = require("./dummy");
const db = require("../models/index");
const ReactQuestion = db.reactQuestion;

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
};

module.exports = { resolvers };
