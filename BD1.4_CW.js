let express = require("express");
let app = express();
let PORT = 3000;

//Q-1
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getWelcomeMessage() {
  return "Welcome to our service!";
}
//Q-2
app.get("/greet", (req, res) => {
  let userName = req.query.username;
  res.send(getGreetingMessage(userName));
});

function getGreetingMessage(userName) {
  return `Hello, ${userName}!`;
}

//Q-3
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

function checkPasswordStrength(password) {
  if (password.length >= 15) {
    return `Password is strong`;
  } else {
    return `Password is not strong`;
  }
}

//Q-4
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
});

function getSum(num1, num2) {
  let result = num1 + num2;
  return result.toString();
}

//Q-5
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return `${username} is subscribed`;
  } else {
    return `${username} is not subscribed`;
  }
}

//Q-6
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

function getDiscountedPrice(price, discount) {
  let discountedPrice = price - price * (discount / 100);
  return discountedPrice.toString();
}

//Q-7
app.get("/personalized-greeting", (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getPersonalizedGreeting(age, gender, name) {
  if (gender === "male") {
    return `Hello, ${name}! You are a ${age} year old male`;
  } else if (gender === "female") {
    return `Hello, ${name}! You are a ${age} year old female`;
  } else {
    return `Hello, ${name}! You are a ${age} year old unknown gender`;
  }
}

//Q-8
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let tax = parseFloat(req.query.tax);
  let discount = parseFloat(req.query.discount);

  res.send(getFinalPrice(price, discount, tax));
});

function getFinalPrice(price, discount, tax) {
  let disscountedPrice = price - price * (discount / 100);
  let finalPrice = disscountedPrice + disscountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.listen(PORT, () => {
  console.log(`App(BD1.4_CW) is listening on port ${PORT}`);
});
