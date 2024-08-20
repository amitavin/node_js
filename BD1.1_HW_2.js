let express = require("express");
let app = express();
let PORT = 3000;

app.get("/custom-commit", (req, res) => {
  let type = req.query.type 
  let message = req.query.message 
  let custom_commit=type+": "+message
  res.send(custom_commit);
});

app.get("/certificate", (req, res) => {
  let firstName  = req.query.firstName ;
  let lastName  = req.query.lastName ;
  let courseName  = req.query.courseName ;
  let certificate = "This certification is awarded to "+firstName+" "+lastName +" for completing the course "+courseName
  res.send(certificate);
});

app.get("/autoreply", (req, res) => {
  let startMonth  = req.query.startMonth ;
  let endMonth = req.query.endMonth;
  let autoreply ="Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from "+startMonth+" till " +endMonth +". Your enquiry will be resolved by another colleague." 
  res.send(autoreply);
});

app.get("/secureurl", (req, res) => {
  let domain = req.query.domain;
  let secureurl = "https://" + domain;
  res.send(secureurl);
});

app.get("/sendotp", (req, res) => {
  let otpCode = req.query.otpCode;
  let sendotp = "our OTP for account verification is "+otpCode+". Do not share this with anyone";
  res.send(sendotp);
});

app.get("/welcome", (req, res) => {
  let firstName  = req.query.firstName ;
  let email = req.query.email;
  let welcome = "Hey "+firstName+". We're excited to have you here, we'll send future notifications to your registered mail ("+email+")"
  res.send(welcome);
});

app.get("/github-profile", (req, res) => {
  let username  = req.query.userName ;
  let profile = "https://github.com/"+username;
  res.send(profile);
});

app.get("/text-to-csv", (req, res) => {
  let id  = req.query.id
  let email  = req.query.email
  let rollNumber  = req.query.rollNumber
  let result = id+", "+email+", "+rollNumber;
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`App(BD1.1_HW-1) is listening on port ${PORT}`);
});
