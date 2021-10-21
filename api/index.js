const express = require("express");
const usersRoutes = require("./resources/users/usersRoutes.js");
const connect = require("./database.js/connection");
const dotenv = require("dotenv");
dotenv.config();

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();
app.use(express.json());

const port = 5050;

// const  jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://dev-v3qzmu10.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "http://localhost:5000/api/",
//   issuer: "https://dev-v3qzmu10.us.auth0.com/",
//   algorithms: ["RS256"],
// });

// app.use(jwtCheck);

// server starting

app.listen(port, () => console.log(`server running on port ${port}`));

//connect

connect();

// routes

app.use("/api/users", usersRoutes);
