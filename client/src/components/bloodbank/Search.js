import React, { useState, useEffect } from "react";
import Axios from "axios";

//css
import "../../assets/css/Search.css";

const Search = () => {
  //variables
  var [place, setplace] = useState("");
  var [blood, setblood] = useState("");
  const [searchList, setsearchList] = useState([]);

  //search for blood
  useEffect(() => {
    Axios
      .post("http://localhost:3000/home/search", {
        place: place,
        blood: blood,
      })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          setsearchList(response.data);
          // console.log(response);
        }
      });
  });

  //returning
  return (
    <div className="search">
      {" "}
      <form>
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          onChange={(e) => {
            setplace(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodGroup"
          onChange={(e) => {
            setblood(e.target.value);
          }}
        />
        <button onClick={() => useEffect}><i className="fa fa-search" /></button>
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone </th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.userfname}</td>
                <td>{val.userphone}</td>
                <td>{val.userplace}</td>
                <td>{val.userbloodgroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
