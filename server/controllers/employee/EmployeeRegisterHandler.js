
module.exports = (app, db) => {
  app.post("/reg/emp", (req, res) => {
    //variables
    const empName = req.body.empName;
    const empMail = req.body.empMail;
    const empPhone = req.body.empPhone;
    const empAddress = req.body.empAddress;
    const empUserName = req.body.empUserName;
    const empPassword = req.body.empPassword;

    //query
    const sqlInsert1 =
      "INSERT INTO emp_details (empname,empmail,empphone,empaddress) VALUES ($1,$2,$3,$4)";

    const sqlInsert2 =
      "INSERT INTO emp_login (emp_id,username,password) VALUES ($1,$2,$3)";

    const sqlDelete = "DELETE  FROM emp_details WHERE emp_id= $1";

    //s
    db.query(
      sqlInsert1,
      [empName, empMail, empPhone, empAddress],
      (err, result) => {
        if (err) {
          console.log(err + "THAT'S AN ERROR!!!");
        } else {
          db.query("SELECT emp_id FROM emp_details WHERE empname = $1", [empName], (err, result) => {
            if (err) {
              console.log(err + (" CANNOT FIND THE USER ID"));
            }
            else {
              var emp_id = (result.rows[0].emp_id);
              //
              db.query(
                sqlInsert2,
                [emp_id, empUserName, empPassword],
                (err, result1) => {
                  if (err) {
                    //
                    console.log(err);
                    db.query(sqlDelete, [emp_id], (err, result2) => {
                      if (err) console.log(err);
                      else {
                        console.log("user already exists!");
                        res.send({ message: "USER ALREADY EXISTS!" })
                      }
                    });
                  } else {
                    console.log("Employee Registered Successfully");
                    res.send({ message: "EMPLOYEE REGISTRATION SUCCESSFULL!" })
                  }
                }
              );
            };
          }
          )
        }
      }
    );
  });
};
