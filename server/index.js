const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const config = require("./config");
const { checkConnection } = require("./dbconnect");
require("dotenv").config();

const app = express();
checkConnection();

app.use(bodyParser.json());
app.use(cors());
app.use("/storages", express.static(path.join(__dirname, "storages")));
app.use("/api", require("./routes"));

app.get("/hello", (req, res) => {
  res.json({ success: true, message: "Hello World!" });
});

const port = config.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
