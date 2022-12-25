var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middileware

//module export
module.exports = (app, db, bcrypt) => {
  app.post("/login/emp", (req, res) => {

    //variables
    const userName = req.body.empUserName;
    const password = req.body.empPassword;

    
    const sqlSelect =
      "SELECT * FROM emp_login WHERE userusername = $1";

    db.query(sqlSelect, [userName], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      } else {
        if (result.rows[0].username === userName) {
          let hashedPassword = bcrypt.compareSync(password, result.rows[0].password);
          if (hashedPassword == true) {
            res.json({ successMsg: "You are logged in!" })
            console.log("**RESULT SENT TO FRONT END**");
          }
          else {
            res.send({ message: "wrong username/password combination!" });
            console.log(result.rows);
            console.log("**INVALID COMBINATION**");
          }
        }
      }
      ////
    });
  });
};
