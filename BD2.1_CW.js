let express = require("express");
let app = express();

app.get("/", (req, res) => {
  let welcomeNote = "You are on BD2.1_CW";
  res.send(welcomeNote);
});

app.get("/person", (req, res) => {
  res.json(person);
});

let person = {
  firstName: "Amit",
  lastName: "Sharma",
  age: "30",
  gender: "Male",
  isMember: true,
};

app.get("/person/fullname", (req, res) => {
  let _fullName = fullName(person);
  res.json({ FullName: _fullName });
});
function fullName(person) {
  return person.firstName + " " + person.lastName;
}

app.get("/person/firstname-gender", (req, res) => {
  res.json(GetFirstNameGender(person));
});
function GetFirstNameGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
}

app.get("/person/increment-age", (req, res) => {
  res.json(GetIncrementAge(person));
});
function GetIncrementAge(person) {
  person.age = parseInt(person.age) + 1;
  return person;
}

app.get("/person/fullname-membership", (req, res) => {
  res.json(GetFullnameMembership(person));
});
function GetFullnameMembership(person) {
  let _fullname = fullName(person);
  return {
    fullname: _fullname,
    isMember: person.isMember,
  };
}

app.get("/person/final-price", (req, res) => {
  let cartValue = parseFloat(req.query.cartTotal);
  let finalPrice = GetDiscount(cartValue, person.isMember);
  res.json({ finalPrice: finalPrice });
});
function GetDiscount(cartValue, isMember) {
  let finalPrice;
  if (isMember == true) {
    finalPrice = cartValue - cartValue * 0.1;
  } else {
    finalPrice = cartValue;
  }
  return finalPrice;
}

app.get("/person/shipping-cost", (req, res) => {
  let cartValue = parseFloat(req.query.cartTotal);
  let shippingCost = GetShippingCost(cartValue, person.isMember);
  res.json({ shippingCost: shippingCost.toFixed(2) });
});
function GetShippingCost(cartValue, isMember) {
  let shippingcost;
  if (isMember == true && cartValue > 500) {
    shippingcost = 0;
  } else {
    shippingcost = 99;
  }
  return shippingcost;
}

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
