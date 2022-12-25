const { Client, Pool } = require('pg')
const jwt = require("jsonwebtoken");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var bcrypt = require("bcryptjs");

//controllers
// user function handlers
var UserLoginHandler = require("./controllers/user/UserLoginHandler");
var UserRegisterHandler = require("./controllers/user/UserRegisterHandler");
var RequestClassHandler =require("./controllers/bloodbank/RequestClassHandler")

//employee function handlers
var EmployeeLoginHandler = require("./controllers/employee/EmployeeLoginHandler");
var EmployeeRegisterHandler = require("./controllers/employee/EmployeeRegisterHandler");
var UpdateBlood = require("./controllers/bloodbank/UpdateStockHandler");
var UpdateHealthHandler = require("./controllers/bloodbank/UpdateHealthHandler");
var HandleRequestHandler = require('./controllers/bloodbank/HandleRequestHandler')


//dashboard
var dashboardHandler = require("./controllers/dashboard/dashboardHandler");
var SearchHandler = require("./controllers/bloodbank/SearchHandler");

//create the app
var app = express();

// middilewares set app to use the body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



const db = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "thinkvision1.",
  database: "bloodBank"
})

// user functionalities
UserRegisterHandler(app, db);
UserLoginHandler(app, db, bcrypt);
RequestClassHandler(app,db);

//employee functionalities
EmployeeRegisterHandler(app, db);
EmployeeLoginHandler(app, db, bcrypt);
UpdateHealthHandler(app, db);
HandleRequestHandler(app, db);

// bloodbank functionalities
dashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);

//listening the port
app.listen(3000, (err) => {
  if (err) throw err;
  else console.log("listening to port : 3000");
});


