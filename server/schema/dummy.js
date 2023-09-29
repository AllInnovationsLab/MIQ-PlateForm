const dummyBooks = [
  { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    simularBooks: [
      {
        id: 7,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
      },
      { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    ],
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { id: 9, title: "Brave New World", author: "Aldous Huxley" },
  {
    id: 10,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
];

// You can export this dummy data array
module.exports = { dummyBooks };
