// @ts-nocheck
import React, { useState } from "react";
import "./Report.css";

const ReportField = ({ onSentChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    comment: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnClick = () => {
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      console.log(formData);

      // Call the onSentChange callback to notify the parent component (ReportBox)
      onSentChange(true);
    }, 1000);
  };

  return (
    <div className={"Report-Field "}>
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        className={"Report-Input"}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="mail"
        placeholder="Enter Email"
        value={formData.mail}
        onChange={handleChange}
        className={"Report-Input"}
        required
      />
      <label>Enter Your Comment</label>
      <input
        name="comment"
        placeholder="Comments"
        value={formData.comment}
        onChange={handleChange}
        className={"Report-Input"}
      />
      <button type="button" onClick={handleOnClick} disabled={isSending} className={"Report-Send-Btn"}>
        {isSending ? "Sending..." : sent ? "Sent" : "Send"}
      </button>
    </div>
  );
};

const ReportBox = () => {
  const [sent, setSent] = useState(false); // Lifted state

  // Callback function to update 'sent' in ReportBox
  const handleSentChange = (value) => {
    setSent(value)
    setInterval(() =>{
      setSent(!value);
    }, 10000)
  };

  return (
    <div className="Report-Box">
      {sent ? <h1>Thank You</h1> : <ReportField onSentChange={handleSentChange} />}
    </div>
  );
};

export default ReportBox;
