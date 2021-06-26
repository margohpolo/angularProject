const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const allowedOrigins = ["http://localhost:4200"];
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1123",
  database: "usersapidb",
});

var server = app.listen(4100, function () {
  //   var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://localhost:%s", port);
});

connection.connect((error) => {
  if (error) throw error;
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors(
    (cors.CorsOptions = {
      origin: allowedOrigins,
    })
  )
);

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM api_users", (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post("/createUser", (req, res) => {
  let postData = req.body;
  connection.query(
    "INSERT INTO api_users SET ?",
    postData,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.delete("/deleteUser/:id", (req, res) => {
  let id = req.params.id;
  connection.query(
    `DELETE FROM api_users WHERE id=${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM api_users where id=${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.put("/updateUser", (req, res) => {
  let userData = req.body;
  connection.query(
    `UPDATE api_users SET firstname='${userData.firstname}', lastname='${userData.lastname}', email='${userData.email}', country='${userData.country}', address='${userData.address}' WHERE id=${userData.id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});