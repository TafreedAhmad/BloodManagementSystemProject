
import "../../assets/css/EmployeeLogin.css";


import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


//css
import "../../assets/css/UserLogin.css";

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

  const empLoginCheck = async (e) => {

    e.preventDefault();
    Axios
      .post("http://localhost:3000/login/emp", {
        empUserName: empUserName,
        empPassword: empPassword,
      })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert("WELCOME!");
          navigate("/login/emp/dash");
        }
      });
  };

  return (
    <div className="emp-login">
      <h2>EMPLOYEE LOGIN</h2>
      <form>
        <input
          name="username"
          type="text "
          placeholder="username"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button onClick={empLoginCheck}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
