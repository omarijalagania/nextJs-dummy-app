import React, { useRef } from "react";
import classes from "../form/submitFormComp.module.css";

function SubmitFormComp() {
  const name = useRef();
  const surName = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const getName = name.current.value;
    const getSurName = surName.current.value;

    const bodyData = { name: getName, surName: getSurName };

    if (getName && getSurName !== "") {
      //send POST Method
      fetch("/api/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });
    }
  };

  return (
    <div>
      <form onClick={submitHandler} className={classes.forForm}>
        <label htmlFor="name"> Name</label>
        <input name="name" id="name" type="text" ref={name} />

        <label htmlFor="surname"> Surname</label>
        <input name="surname" id="surname" type="text" ref={surName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SubmitFormComp;
