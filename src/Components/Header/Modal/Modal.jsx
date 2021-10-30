import React from "react";
import "./Modal.css";
import SearchBtn from './../../../Images/search.png';
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input type="search" placeholder="Type your text here"/>
        <img src={SearchBtn} alt="Search Button" />
      </div>
    </div>
  );
};

export default Modal;
