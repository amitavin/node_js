let express = require("express");
let app = express();

app.get("/", (req, res) => {
  let welcomeNote = "You are on BD2.1_HW_1";
  res.send(welcomeNote);
});

//Q-1
app.get("/book", (req, res) => {
  res.json(book);
});

let book = {
  title: "The God of Small Things",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
};

//Q-2
app.get("/book/fulltitle-author", (req, res) => {
  let titleAndAuthorName = GetFullTitleAndAuthor(book);
  res.json({ FullTitleAndAuthor: titleAndAuthorName });
});
function GetFullTitleAndAuthor(book) {
  return book.title + " by " + book.author;
}

//Q-3
app.get("/book/genre-availability", (req, res) => {
  res.json(GetGenreAndAvailability(book));
});
function GetGenreAndAvailability(book) {
  return {
    genre: book.genre,
    isAvailable: book.isAvailable,
  };
}

//Q4
app.get("/book/age", (req, res) => {
  res.json(calculateBookAge(book));
});
function calculateBookAge(book) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - parseInt(book.publicationYear);
  return { age: age };
}

//Q-5
app.get("/book/summary", (req, res) => {
  res.json(GetBookSummary(book));
});
function GetBookSummary(book) {
  return {
    summary: `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Published:${book.publicationYear}`,
  };
}

//Q-6
app.get("/book/stock-status", (req, res) => {
  res.json(CheckStockAndOrder(book));
});
function CheckStockAndOrder(book) {
  return {
    status: book.isAvailable ? "In Stock" : "Out of Stock",
    stock: book.stock,
  };
}

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
