import React, { useState } from "react";
import '../spamForm.css';


const SpamForm = () => {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setRes("Waiting for ml backend");
  };
  return (
    <>
      <h3>Email spam detection</h3>
      <form onSubmit={submit}>
        <textarea
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          rows={5}
          placeholder="Enter you email here for spam detection"
        ></textarea>
        <button type="submit">Check</button>
      </form>

      <div>{res}</div>
    </>
  );
};

export default SpamForm;
