//module export
module.exports = (app, db, nav) => {
  app.get("/login/emp/ub", (req, res) => {
    //query
    const sqlSelect = "SELECT * FROM blood_stocks;";

    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result.rows);
      }
    });
  });

  app.put("/login/emp/ub/update", (req, res) => {
    //variables
    const unitUpdate = req.body.unitUpdate;
    const b_id = req.body.b_id;
    console.log(unitUpdate);
    console.log(b_id);
    //query
    const sqlUpdate = "UPDATE blood_stocks SET unit=$1 WHERE b_id= $2;";
    //
    db.query(sqlUpdate, [unitUpdate, b_id]);


  });
};
