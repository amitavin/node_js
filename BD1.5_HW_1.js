let express = require("express");
const { describe } = require("node:test");
let cors = require("cors");

let app = express();
app.use(cors());

//Endpoint-1
app.get("/cart-total", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let result = cartTotal + newItemPrice;
  res.send(result.toString());
});

//Endpoint-2
app.get("/membership-discount", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  if (isMember == "true") {
    cartTotal = cartTotal - (cartTotal * discuntPercentage) / 100;
  } else {
    cartTotal = cartTotal;
  }
  res.send(cartTotal.toString());
});

//Endpoint-3
app.get("/calculate-tax", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  cartTotal = (cartTotal * taxRate) / 100;
  res.send(cartTotal.toString());
});

//Endpoint-4
app.get("/estimate-delivery", (req, res) => {
  let shippingMethod = req.query.shippingMethod.toLowerCase();
  let distance = parseFloat(req.query.distance);
  let deliveryCost = 0;
  if (shippingMethod == "standard") {
    deliveryCost = distance / 50;
  } else if (shippingMethod == "express") {
    deliveryCost = distance / 100;
  } else {
    deliveryCost = "Invalid shipping method";
  }
  res.send(deliveryCost.toString());
});

//Endpoint-5
app.get("/shipping-cost", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
});

//Endpoint-6
app.get("/loyalty-points", (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * loyaltyRate;

  res.send(loyaltyPoints.toString());
});

//server side values
let taxRate = 5; //5%
let discuntPercentage = 10; //10%
let loyaltyRate = 2; // 2 points per $1

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
