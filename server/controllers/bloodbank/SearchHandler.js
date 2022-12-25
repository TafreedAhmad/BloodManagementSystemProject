//module export
module.exports = (app, db) => {
  app.post("/home/search", (req, res) => {
    //variables
    const blood = req.body.blood;
    const place = req.body.place;
    //query
    //console.log(blood + place);
    const sqlSelect = "SELECT * FROM user_details WHERE userbloodgroup = $1 OR userplace = $2";

    //
    db.query(sqlSelect, [blood, place], (err, result) => {
      if (err) {
        console.log("**   SEARCH ERROR   **" + err);
      }

      if (result) {
        // res.send(result);
        console.log("**SEARCH RESULTS FOUND AND SEND TO FRONT END**");
        console.log(result.rows);
        res.send(result.rows);
      } else {
        res.send({ message: "NO SEARCH RESULTS FOUND!" });
      }
    });
  });
};
