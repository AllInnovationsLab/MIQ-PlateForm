// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const { dummyBooks } = require("./dummy");
const _ = require("lodash");
const resolvers = {
  Query: {
    books: () => dummyBooks,
    book: (parent, args) => {
      const title = args.title;
      return _.find(dummyBooks, { title });
    },
  },
};

module.exports = { resolvers };
