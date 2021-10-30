import React from "react";
import classes from "./Sidebar.module.css";
import Biography from "./Short Biography/Biography";
import Newsletter from "./Newsletter/Newsletter";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
    <Biography />
    <Newsletter />
    </div>
  );
};

export default Sidebar;
