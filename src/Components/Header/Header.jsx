import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import SearchBtn from "./../../Images/search.png";
import Modal from "./Modal/Modal";

const Header = () => {
  let [modalActive, setModalActive] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Nikolai Prinko</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Lifestyle">Lifestyle</Link>
          </li>
          <li>
            <Link to="/Family">Family</Link>
          </li>
          <li>
            <Link to="/About">About Me</Link>
          </li>
          <li>
            <Link to="/Contacts">Contact Me</Link>
          </li>
          <li>
            <img
              src={SearchBtn}
              alt="Search Button"
              className={classes.searchBtn}
              onClick={() => setModalActive(true)}
            />
          </li>
        </ul>
      </nav>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;
