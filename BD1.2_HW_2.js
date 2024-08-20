let express = require("express");
let app = express();
let PORT = 3000;

app.get("/bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  res.send("Your BMI is " + bmi.toFixed(2));
});

app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
  let total_price = price * units;
  let result = `Your total for ${units} ${product} is ${total_price.toString()}`;
  res.send(result);
});

app.get("/grade", (req, res) => {
  let math = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  let gradeInPercentage = ((math + science + english) / 300) * 100;
  let result = `Your grade in percentage is  ${Math.round(gradeInPercentage)}%`;
  res.send(result);
});

app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  let result = "Your bill amount is " + discountedPrice;
  res.send(result);
});

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  let result = `Each friend owes Rs. ${splitAmount} against the bill`;
  res.send(result);
});

app.get("/celsius-to-fahrenheit", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;

  let result = `Result: ${fahrenheit} Fahrenheit`;
  res.send(result);
});

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = hourlyWage * totalHours;

  let result = `Result: Your monthly salary is ₹${monthlySalary}`;
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`App(BD1.2_HW_2) is listening on port ${PORT}`);
});
