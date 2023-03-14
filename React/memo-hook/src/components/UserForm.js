import React, { useState } from "react";
import useInput from "../hooks/useInput";

function UserForm() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            {...bindFirstName}
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            {...bindLastName}
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
