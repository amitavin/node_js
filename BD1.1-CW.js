let express = require("express");
let app = express();

app.get("/name", (req, res) => {
  let myName = req.query.name.toUpperCase();
  res.send(myName);
});

app.get("/fullname", (req, res) => {
  let firstName = req.query.firstname;
  let lastName = req.query.lastname;
  let fullName = firstName + " " + lastName;
  res.send(fullName.toUpperCase());
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formatedDate = month + ", " + year;
  res.send(formatedDate);
});

app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greet = "Namaste, " + name.toUpperCase() + "!";
  res.send(greet);
});

app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ", " + city + ", " + state;
  res.send(address.toUpperCase());
});

app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;
  res.send(email);
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
