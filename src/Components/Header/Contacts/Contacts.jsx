import React from "react";
import MyButton from "../../../UI/Buttons/Button";
import classes from './Contacts.module.css'
const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <div className={classes.title}>
        <h2>Contact Me</h2>
      </div>
      <div>
        <form action="/">
          <div className={classes.name}>
            <label htmlFor="name">Type Your Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.email}>
            <label htmlFor="email">Type Your Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.message}>
            <label htmlFor="message">Your message</label>
            <input type="text" id="message" />
          </div>
          <div className={classes.submit}>
            <MyButton>Submit</MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
