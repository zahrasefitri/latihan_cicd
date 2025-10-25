const ex = require("express");
const app = ex();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!, This is naza");
});
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
