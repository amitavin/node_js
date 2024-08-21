let express = require("express");
const { describe } = require("node:test");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Stock portfolios analysis API");
});

//Endpoint-1
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});

//Endpoint-2
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturn = stock1 + stock2 + stock3 + stock4;

  res.send(totalReturn.toString());
});

//Endpoint-3
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let percentage = (returns / boughtAt) * 100;
  res.send(percentage.toString());
});

//Endpoint-4
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnpercentage = stock1 + stock2 + stock3 + stock4;

  res.send(totalReturnpercentage.toString());
});

//Endpoint-5
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    res.send("profit");
  } else {
    res.send("loss");
  }
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
