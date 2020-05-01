import React, { useState } from "react";

function AddPlayerForm(props) {
  const [newName, setNewName] = useState("");
  const onChange = (event) => {
    console.log("new input .value:", event.target.value);
    setNewName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.addPlayer(newName);

    setNewName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="AddPlayerForm">
        Add New Player
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={onChange}
        />
        <input type="submit" />
      </div>
    </form>
  );
}

export default AddPlayerForm;
