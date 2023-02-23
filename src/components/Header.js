import React, { useContext } from "react";
import { ThemeContext } from "../App";
import logo from "../images/devfinder.svg";
import "./Header.css";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

export default function Header() {
  const { themes, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <img className="header-logo" src={logo} alt="logo" />
      <div className="theme-wrapper" onClick={() => toggleTheme(themes)}>
        {
          <span className="theme-text">
            {themes === "light" ? "dark" : "light"}
          </span>
        }
        {themes === "dark" ? (
          <img className="sun" src={sun} alt="sun" />
        ) : (
          <img className="moon" src={moon} alt="moon" />
        )}
      </div>
    </header>
  );
}
