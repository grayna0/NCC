import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleClick = (event) => {
    const listItems = document.querySelectorAll(".sidebar ul li");
    listItems.forEach((item) => {
      item.style.color = "white";
    });
    event.target.style.color = "red";
  };
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const meniIcon = document.querySelector(".menu-icon");

    sidebar.style.display = "block";
    meniIcon.style.display = "none";
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const meniIcon = document.querySelector(".menu-icon");
    sidebar.style.display = "none";
    meniIcon.style.display = "block";
  };

  return (
    <>
      <div className="menu-icon" onClick={showSidebar}>
        Menu
      </div>

      <div className="sidebar">
        <ul>
          <Link to="/home">
            <li onClick={(e) => handleClick(e)}>Home</li>
          </Link>
          <Link to="/services">
            <li onClick={(e) => handleClick(e)}>Services</li>
          </Link>
          <Link to="/new">
            <li onClick={(e) => handleClick(e)}>News</li>
          </Link>
          <Link to="/blog">
            <li onClick={(e) => handleClick(e)}>Blog</li>
          </Link>
          <Link to="/contact">
            <li onClick={(e) => handleClick(e)}>Contact</li>
          </Link>
        </ul>
        <p className="close" onClick={hideSidebar}>
          X
        </p>
      </div>
    </>
  );
};

export default Sidebar;
