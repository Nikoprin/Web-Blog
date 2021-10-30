import React from "react";
import Me from "./../../../Images/Hacker.jpg";
import Instagram from "./../../../Images/Inst.png";
import Youtube from "./../../../Images/YouTube.png";
import { NavLink } from "react-router-dom";
import classes from './Biography.module.css';
const Biography = () => {
  return (
    <div className={classes.biography}>
      <h2>About Me</h2>
      <div>
        <img src={Me} alt="My photo" />
      </div>
      <div>
        <p>
          Hallo, mein Name ist Ania und ich bin die Autorin und das Gesicht von
          mystyleisland. Mit großer Begeisterung verrate ich dir die besten
          Fashion und Stylingtipps und nehme dich mit auf meine Reisen.
        </p>
      </div>
      <div className={classes.about}>
        <NavLink to="/About">About Me</NavLink>
      </div>
      <div className={classes.social}>
        <a href="#">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={Youtube} alt="Youtube" />
        </a>
      </div>
    </div>
  );
};

export default Biography;