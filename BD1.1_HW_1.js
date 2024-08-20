let express = require("express");
let app = express();
let PORT = 3000;

app.get("/whisper", (req, res) => {
  let name = req.query.name;
  res.send(name.toLowerCase());
});

app.get("/full-product-name", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + "/" + year;
  res.send(date);
});

app.get("/greet", (req, res) => {
  let city = req.query.city;
  let greet = "You live in " + city;
  res.send(greet);
});

app.get("/capital", (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let greet = capital + " is the capital of  " + country;
  res.send(greet);
});

app.get("/email", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  res.send(email);
});

app.listen(PORT, () => {
  console.log(`App(BD1.1_HW-1) is listening on port ${PORT}`);
});
