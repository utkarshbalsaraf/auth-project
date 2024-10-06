import express from "express";
import signupRoute from "./src/routes/signup.route.js";
import bodyParser from "body-parser";
import dbConnect from "./src/configuration/dbconfig.js";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/user", signupRoute);
dbConnect();
app.listen(port, () => {
  console.log("Server is listening on port : ", port);
});
