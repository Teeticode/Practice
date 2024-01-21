import React, { useState, useEffect } from "react";
import "./style.css";

function InputHome() {
  const [note, setNote] = useState("");
  useEffect(() => {
    fetch("https://refactored-chainsaw-teeti.onrender.com/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, [note]);
  return (
    <div className="inputWrapper">
      <input
        type="text"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      <button className="submit" onClick={() => console.log(note)}>
        save
      </button>
    </div>
  );
}

export default InputHome;
