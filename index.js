const ex = require("express");
const app = ex();
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!, This is naza");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
