///module export
module.exports = (app, db) => {
  app.post("/request", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;
    // const user_id = req.body.user_id;
    let user_id = 64;
    console.log("bloodgroup : " + blood_group);
    // console.log("User ID " + user_id);
    //query
    const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group=$1";
    const sqlInsert =
      "INSERT INTO  user_request(user_id, blood_group,unit) VALUES ($1,$2,$3)";
    //
    db.query(sqlSelect, [blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));

          if (unit <= result.rows[0].unit) {
            //
            db.query(sqlInsert, [user_id, blood_group, unit], (err, result) => {
              if (err) {
                console.log("**ERROR ACCEPTING REQUEST!" + err);
              } else {
                res.send({ message: "REQUEST ACCEPETED COLLECT IT FROM THE BLOOD BANK" });
              }
            });
          } else {
            res.send({ message: "INSUFFICIENT STOCKS!" });
          }
        
      }
    });

  });
};
