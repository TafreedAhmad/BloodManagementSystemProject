const { json } = require("body-parser");
module.exports = (app, db) => {
  app.get("/home", (req, res) => {
    //query
    const sqlSelect = "SELECT * from blood_stocks";

    //db search
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      res.send(result.rows);
      // console.log(result);
    });
  });
};
