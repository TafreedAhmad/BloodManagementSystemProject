import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import MyNavbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import UserLogin from "./components/user/userLogin";
import UserRegister from "./components/user/userRegister";
import EmployeeLogin from "./components/employee/employeeLogin";
import EmployeRegister from "./components/employee/employeeRegister";
import UserDashboard from "./components/user/UserDashboard";
import EmpDashboard from "./components/employee/EmpDarshboard";
import UpdateStock from "./components/bloodbank/UpdateStock";
import UpdateHealth from "./components/bloodbank/UpdateHealth";
import Donate from "./components/layout/Donate";
import Search from "./components/bloodbank/Search";
import HandleRequest from "./components/bloodbank/HandleRequest";
import Request from "./components/bloodbank/Request";


//
import RequestClass from "./components/bloodbank/RequestClass";
import axios from "axios";

//css
import "./App.css";

function App() {



  return (
    <div className="App" >
    {/* <Dashboard/> */}
      <MyNavbar />
      <Routes>
        <Route exact path="/home" element={<Dashboard/>} />
        <Route exact path="/donate" element={<Donate/>} />
        <Route exact path="/login/usr" element={<UserLogin/>}/>
        <Route exact path="/login/emp" element={<EmployeeLogin/>}/>
        <Route exact path="/reg/usr" element={<UserRegister/>}/>
        <Route exact path="/reg/emp" element={<EmployeRegister/>}/>
        <Route exact path="/login/usr/dash" element={<UserDashboard/>}/>
        <Route exact path="/login/emp/dash" element={<EmpDashboard/>}/>
        <Route exact path="/login/emp/ub" element={<UpdateStock/>}/>
        <Route exact path="/login/emp/uh" element={<UpdateHealth/>}/>
        <Route exact path="/home/search/blood" element={<Search/>}/>
        <Route exact path="/request" element={<RequestClass/>}/>
        <Route exact path="/login/emp/hr" element={<HandleRequest/>} />
         <Route exact path="/login/usr/dash/req" element={<Request/>}/>
      </Routes>
    </div>
  );
}

export default App;
