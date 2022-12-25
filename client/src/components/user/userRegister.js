import React, { useState, useEffect } from "react";
import Axios from "axios";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

//css
import "../../assets/css/UserRegister.css";


const UserRegister = () => {
  const navigate = useNavigate();
  const [userUserName, setuserUsername] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPlace, setuserPlace] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userGender, setuserGender] = useState("");
  const [userBloodGroup, setuserBloodGroup] = useState("");
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    setValidMatch(userPassword === matchPwd);
  }, [userPassword, matchPwd])

  const submituserRegister = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(userPassword, 12);

    Axios
      .post("http://localhost:3000/reg/usr", {
        userFName: userFName,
        userAge: userAge,
        userGender: userGender,
        userBloodGroup: userBloodGroup,
        userPhone: userPhone,
        userMail: userMail,
        userPlace: userPlace,
        userUserName: userUserName,
        userPassword: hashedPassword,
      })
      .then((response) => {
        alert(response.data.message);
        navigate('/login/usr')
      });
  };

  return (
    <div className="user-register">
      <h2>DONOR REGISTER</h2>
      <form className="userReg-form" onSubmit={submituserRegister}>
        <input
          name="userFName"
          type="text "
          placeholder="Full Name"
          onChange={(e) => {
            setuserFName(e.target.value);
          }}
          required
        />
        <input
          name="userAge"
          type="number" min="1" max="100"
          placeholder="Age"
          onChange={(e) => {
            setuserAge(e.target.value);
          }}
          required
        />
        <input
          name="userGender"
          type="text"
          placeholder="Gender(M/F)"
          onChange={(e) => {
            setuserGender(e.target.value);
          }}
          required
        />
        <input
          name="userBloodGroup"
          type="text "
          placeholder="Blood Group"
          onChange={(e) => {
            setuserBloodGroup(e.target.value);
          }}
          required
        />
        <input
          name="userMail"
          type="email"
          placeholder="Email Place"
          onChange={(e) => {
            setuserMail(e.target.value);
          }}
          required
        />
        <input
          name="userPhone"
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => {
            setuserPhone(e.target.value);
          }}
          required
        />
        <input
          name="userPlace"
          type="text "
          placeholder="Place"
          onChange={(e) => {
            setuserPlace(e.target.value);
          }}
          required
        />
        <h1>Sign Up Form</h1>
        <input
          name="userUserName"
          type="text "
          placeholder="User Name"
          onChange={(e) => {
            setuserUsername(e.target.value);
          }}
        />
        <input
          name="userPassword"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          placeholder="Confirm Password"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>
        <button disabled={!userUserName || !userPassword || !validMatch ? true : false}>REGISTER</button>
      </form>
    </div>
  );
};

export default UserRegister;
