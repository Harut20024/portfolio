import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./EmailForm.css";

const EmailForm = ({ onAuthentication }) => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    if (e.target.value !== "Other") {
      setOtherReason("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalMessage = reason === "Other" ? otherReason : reason;

    const templateParams = {
      from_email: email,
      to_name: "htarzyanh@gmail.com",
      message: finalMessage,
    };

    emailjs.send("service_122l67l", "template_8agf0u7", templateParams, "flxSq_5KpLSb6w2yY")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        onAuthentication();
      }, (error) => {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
      });
  };

  const handleSkip = () => {
    setIsSubmitting(true);
    const templateParams = {
      from_email: "Unknown",
      to_name: "htarzyanh@gmail.com",
      message: "Skipped - No reason provided",
    };

    emailjs.send("service_122l67l", "template_8agf0u7", templateParams, "flxSq_5KpLSb6w2yY")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        onAuthentication();
      }, (error) => {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="form" style={{ textAlign: "center", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <p>Please enter your email and reason to help me track visits to my portfolio site for development purposes.</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <fieldset>
          <legend>Reason for Visit:</legend>
          <label>
            <input
              type="radio"
              value="Employment"
              checked={reason === "Employment"}
              onChange={handleReasonChange}
              required
            />
            Employment
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Learning"
              checked={reason === "Learning"}
              onChange={handleReasonChange}
              required
            />
            Learning
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Other"
              checked={reason === "Other"}
              onChange={handleReasonChange}
              required
            />
            Other
          </label>
        </fieldset>
        {reason === "Other" && (
          <>
            <label htmlFor="otherReason">Please specify:</label>
            <input
              type="text"
              id="otherReason"
              placeholder="Please specify"
              value={otherReason}
              onChange={(e) => setOtherReason(e.target.value)}
              required
            />
          </>
        )}
        <button type="button" className="skip-button" onClick={handleSkip} disabled={isSubmitting}>or skip</button>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
