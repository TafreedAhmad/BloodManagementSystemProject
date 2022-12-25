//moduleexport
module.exports = (app, db, nav) => {
  app.post("/login/emp/uh", (req, res) => {
    //variables
    const user_id = req.body.userId;
    console.log(user_id);

    //query
    const sqlSelect = "SELECT * FROM user_details WHERE user_id=$1";

    //
    db.query(sqlSelect, [user_id], (err, result) => {
      if (err) {
        console.log("**ERROR FETCHING USER DETAILS**"+err);
      } else {
        // res.send(result);
        console.log(result);
        res.send(result.rows);


      }
    });
  });

  //update request
  app.put("/login/emp/uh", (req, res) => {
    //variables
    const user_id = req.body.user_id;
    const userVitals = req.body.userVitals;
    const userHeight = req.body.userHeight;
    const userWeight = req.body.userWeight;
    const userStatus = req.body.userStatus;

    //query
    const sqlUpdate = "UPDATE user_health SET uservitals=$1, userheight=$2, userweight=$3,userstatus=$4 WHERE user_id=$5";

    ////
    db.query(
      sqlUpdate,
      [userVitals, userHeight, userWeight, userStatus, user_id],
      (err, result) => {
        if (err) {
          console.log("** ERROR **" + err);
        } else {
          res.send({message:"HEALTH UPDATED SUCCESSFULLY!"})
          console.log("**SUCCESSFULL UPDATE**");
          console.log(result);

        }
      }
    );
  });
};
