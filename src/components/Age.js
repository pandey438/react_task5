import React from "react";
import { useState } from "react";
import "./styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Age() {
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState(0);

  const handleClick = () => {
    var curr_year = parseInt(new Date().getUTCFullYear());
    var curr_month = parseInt(new Date().getMonth());

    var year = parseInt(String(dob).split("-")[0]);
    var month = parseInt(String(dob).split("-")[1]);

    var diff = curr_month - month + (curr_year - year) * 12;

    // var tage =  Math.abs(age_dt.getUTCFullYear() - 1970);
    setAge(Math.floor(diff / 12));
  };
  return (
    <div className="div1">
      <h1> Age Calculator</h1>
      <h6>Enter your date of birth</h6>
      <input
        onChange={(e) => setDob(e.target.value)}
        type="date"
        class="form-control "
        id="dob"
        name="dob"
      />
      <botton onClick={handleClick} type="submit" class="btn btn-primary">
        Calculate Age
      </botton>
      <h3>You are {age} years old</h3>
    </div>
  );
}

export default Age;
