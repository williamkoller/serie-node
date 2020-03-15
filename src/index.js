const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authController")(app);
require("./controllers/projectController")(app);

app.listen(port, () => {
  console.log(Date(), `server running ${port}`);
  console.log("¯\\_(ツ)_/¯");
});
