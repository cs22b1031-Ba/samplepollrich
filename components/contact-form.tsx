"use client";

import { FormEvent, useState } from "react";

const initialState = {
  fullName: "",
  companyName: "",
  companyEmail: "",
  phoneNumber: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const payload = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(payload.message);
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to submit the form.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <input
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(event) => setFormData({ ...formData, fullName: event.target.value })}
          required
        />
        <input
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(event) => setFormData({ ...formData, companyName: event.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Company Email"
          value={formData.companyEmail}
          onChange={(event) => setFormData({ ...formData, companyEmail: event.target.value })}
          required
        />
        <input
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })}
          required
        />
      </div>
      <textarea
        placeholder="Message"
        rows={5}
        value={formData.message}
        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        required
      />
      <button className="button button-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
      {feedback ? (
        <p className={`form-feedback ${status === "success" ? "success" : "error"}`}>{feedback}</p>
      ) : null}
    </form>
  );
}
