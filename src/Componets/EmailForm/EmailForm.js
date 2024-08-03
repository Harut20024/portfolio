import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./EmailForm.css";

const EmailForm = ({ onAuthentication }) => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isClosed = false;

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
      to_name: "Harut",
      message: finalMessage,
      to_email: "htarzyanh@gmail.com",
      subject: `New Visitor: ${email} - ${finalMessage}`,
    };

    emailjs
      .send(
        "service_122l67l",
        "template_8agf0u7",
        templateParams,
        "flxSq_5KpLSb6w2yY"
      )
      .then(() => {
        const thankYouParams = {
          to_email: email,
          from_name: "Harut",
          subject: "Thank You for Visiting My Portfolio",
          reason: finalMessage,
          reply_to: "htarzyanh@gmail.com",
        };

        return emailjs.send(
          "service_122l67l",
          "template_grja6dv",
          thankYouParams,
          "flxSq_5KpLSb6w2yY"
        );
      })
      .then(() => {
        setIsSubmitting(false);
        setEmail("");
        setReason("");
        setOtherReason("");
        onAuthentication();
      })
      .catch((error) => {
        alert("Email not found");
        setIsSubmitting(false);
      });
  };

  const handleSkip = () => {
    setIsSubmitting(true);
    const templateParams = {
      from_email: "Unknown",
      to_name: "Harut",
      message: "Skipped - No reason provided",
      to_email: "htarzyanh@gmail.com",
      subject: "Visitor Skipped Reason",
      reply_to: "htarzyanh@gmail.com",
    };

    emailjs
      .send(
        "service_122l67l",
        "template_8agf0u7",
        templateParams,
        "flxSq_5KpLSb6w2yY"
      )
      .then((response) => {
        setIsSubmitting(false);
        setEmail("");
        setReason("");
        setOtherReason("");
        onAuthentication();
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  if (isClosed) return null;

  return (
    <div
      className={`form ${isClosed ? "hidden" : ""}`}
      style={{ textAlign: "center", margin: "auto" }}
    >
      <form onSubmit={handleSubmit}>
        <p>
          Please enter your email and reason to help me track visits to my
          portfolio site for development purposes.
        </p>
        <label htmlFor="email"></label>
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
        
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button
          type="button"
          className="skip-button"
          onClick={handleSkip}
          disabled={isSubmitting}
        >
          or skip
        </button>
      </form>
    </div>
  );
};

export default EmailForm;