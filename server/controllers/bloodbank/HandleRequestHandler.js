const { json } = require("body-parser");

//module exports
module.exports = (app, db) => {
  app.get("/login/emp/hr", (req, res) => {
    //query
    const sqlSelect = "SELECT * FROM user_request";
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      res.send(result.rows);
      // console.log(result);

    });
  });

  app.delete("/login/emp/hr/:req_id", (req, res) => {
    //variables
    const req_id = req.params.req_id;

    //query
    const sqlDelete = "DELETE FROM user_request WHERE req_id= $1";
    const sqlSelect1 = "SELECT * FROM user_request WHERE req_id=$1";
    const sqlSelect2 = "SELECT * FROM blood_stocks WHERE blood_group=$1";
    const sqlUpdate = "UPDATE blood_stocks SET unit=$1 WHERE blood_group=$2 ";
    //
    db.query(sqlSelect1, [req_id], (err, result) => {
      if (err) {
        console.log("**ERROR1**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        console.log(result);
        var req_blood_group = result.rows[0].blood_group;
        var req_unit = result.rows[0].unit;
        //
        db.query(sqlSelect2, [req_blood_group], (err, result) => {
          if (err) {
            console.log("**ERROR2**" + err);
          } else {
            result = JSON.parse(JSON.stringify(result));
            console.log("I am here");
            var stock_unit = result.rows[0].unit;
            if (req_unit <= stock_unit) {
              var left_unit = stock_unit - req_unit;
              //
              db.query(sqlUpdate, [left_unit, req_blood_group], (err, result) => {
                if (err) {
                  console.log("**ERROR3**" + err);
                } else {
                  //
                  db.query(sqlDelete, [req_id], (err, result) => {
                    if (err) {
                      console.log("**ERROR**" + err);
                    }
                    else {
                      res.send({ message: "REQUEST SERVERD!" })
                    }
                  })
                }
              })

            } else {
              res.send({ message: "INSUFFICIENT STOCKS!" })
            }
          }
        });
      }
    });
  });
};
