import "./static/navigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [base, setbase] = useState("#3498db");

  const ChangeColor = () => {
    var r = document.querySelector(":root");
    if (base !== "#3498db") {
      r.style.setProperty("--base-color", "#3498db");
      r.style.setProperty("--base-color-hover", "#217dbb");
      r.style.setProperty("--form-input", "#1d6fa5");
      r.style.setProperty("-border", "#dcd9d9");
      r.style.setProperty("--text", "#74808a");
      r.style.setProperty("--heading", "#374054");
      r.style.setProperty("--atext", "#337ab7");
      r.style.setProperty("--alter", "#ecb163");
      r.style.setProperty("--bgc10", "#fff");
      r.style.setProperty("--bgc19", "#a0cfee");
      r.style.setProperty("--bgc18", "#217dbbcc");
      r.style.setProperty("--bgc13", "#16527a");
      r.style.setProperty("--bgc14", "#f2f2f5");
      r.style.setProperty("--bgc1o0", "#7e8890");
      r.style.setProperty("--bgc1o2", "#e4e4ea");
      setbase("#3498db");
    } else {
      r.style.setProperty("--base-color", "#ecb163");
      r.style.setProperty("--base-color-hover", "#9b742b");
      r.style.setProperty("--form-input", "#a77223");
      r.style.setProperty("-border", "#dcd9d9");
      r.style.setProperty("--text", "#8a8474");
      r.style.setProperty("--heading", "#545237");
      r.style.setProperty("--atext", "#b78d33");
      r.style.setProperty("--alter", "#3498db");
      r.style.setProperty("--bgc10", "#fff");
      r.style.setProperty("--bgc19", "#eedca0");
      r.style.setProperty("--bgc18", "#e2ab45cc");
      r.style.setProperty("--bgc13", "#7a6316");
      r.style.setProperty("--bgc14", "#f5f4f2");
      r.style.setProperty("--bgc1o0", "#908a7e");
      r.style.setProperty("--bgc1o2", "#eae8e4");
      setbase("#ecb163");
    }
  };

  const openMenu = () => {
    document.body.classList.add("active");
    document.getElementById("myHeader").classList.add("active");
  };
  const CloseMenu = () => {
    document.body.classList.remove("active");
    document.getElementById("myHeader").classList.remove("active");
  };
  return (
    <>
      <div id="mobile-menu-open" className="shadow-large" onClick={openMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <header id="myHeader">
        <div id="mobile-menu-close" onClick={CloseMenu}>
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <Link to="/">
              <a onClick={CloseMenu}>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a onClick={CloseMenu}>About</a>
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <a onClick={CloseMenu}>Experience</a>
            </Link>
          </li>
          <li>
            <Link to="/education">
              <a onClick={CloseMenu}>Education</a>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <a onClick={CloseMenu}>Projects</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a onClick={CloseMenu}>Contact</a>
            </Link>
          </li>
          <li>
            <a id="changecolor" onClick={(CloseMenu, ChangeColor)}>
              <i className="fa fa-bullseye fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navigation;
