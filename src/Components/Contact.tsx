import axios from "axios";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import config from "../config";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

interface ISubmitStatus {
  status: string;
  text: string;
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: ""
  });

  const [submitStatus, changeSubmitStatus] = useState<ISubmitStatus>({
    status: "unsubmitted",
    text: "submit"
  });
  const [error, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    changeSubmitStatus({ status: "submitting", text: "..." });
    const token: string | null = localStorage.getItem("form-token");
    axios.post(`${config.serverUrl}/api/contact`, { ...formData, token })
      .then((res) => {
        changeSubmitStatus({ status: "submitSuccess", text: "success" });
        localStorage.setItem("form-token", res.data.token);
        console.log(res);
      })
      .catch((err) => {
        changeSubmitStatus({ status: "submitFailure", text: "failure" });
        err.response.status === 429 && setErrorMessage(err.response.data.message);
        console.warn(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const key: string = e.target.id;
    const val: string = e.target.value;
    setFormData({ ...formData, [key]: val });
  };

  return (
    <Fragment>
      <h1>Contact</h1>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            minLength={1}
            maxLength={30}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="input-field">

          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            minLength={7}
            maxLength={50}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            minLength={10}
            maxLength={300}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          />
        </div>
        <button
          className={submitStatus.status}
          type="submit">{submitStatus.text}</button>
      </form>
      {error && <div className="error">{error}</div>}
    </Fragment>
  );
};

export default Contact;
