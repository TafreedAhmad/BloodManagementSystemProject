import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


//css
import "../../assets/css/UserLogin.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const userLoginCheck = async (e) => {

    e.preventDefault();
    Axios
      .post("http://localhost:3000/login/usr", {
        userUserName: userUserName,
        userPassword: userPassword,
      })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          console.log((response.data.successMsg));
          alert("WELCOME! " + userUserName);
          navigate("/login/usr/dash");
        }
      });
  };

  return (
    <>

      <div className="user-login">
        <h2>USER LOGIN</h2>
        <form onSubmit={userLoginCheck}>
          <input
            name="username"
            type="text "
            placeholder="username"
            onChange={(e) => {
              setuserUserName(e.target.value);
            }}
            required
          />
          <input
            name="password"
            type="password "
            placeholder="password"
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
