let express = require("express");
let app = express();

app.get("/", (req, res) => {
  //req=req.query.name.toUpperCase();
  let welcomeNote = "Hey, Amit here, sending you a hello!";
  res.send(welcomeNote);
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
