//module export
module.exports = (app, db, bcrypt, jwt) => {
  app.post("/login/usr", (req, res) => {
    //variables
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;
    console.log(userUserName);
    console.log(userPassword);

    //query
    const sqlSelect =
      "SELECT * FROM user_login WHERE userusername = $1";

    db.query(sqlSelect, [userUserName], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      } else {
        if (result.rows[0].userusername === userUserName) {
          let hashedPassword = bcrypt.compareSync(userPassword, result.rows[0].userpassword);
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
