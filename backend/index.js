import express from "express";
import signupRoute from "./src/routes/signup.route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnect from "./src/configuration/dbconfig.js";
import {createAdminAccount} from "./src/scripts/admin.js";
import loginRouter from "./src/routes/login.route.js";
const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/user", signupRoute);
app.use("/user",loginRouter)
dbConnect();
createAdminAccount();
app.listen(port, () => {
  console.log("Server is listening on port : ", port);
});
