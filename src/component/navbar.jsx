import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = (props) => {
  const [btnText, setbtnText] = useState("");

  
  return (
    <>
      <nav
        style={
          props.mode == "dark"
            ? { backgroundColor: "black" }
            : { backgroundColor: "rgb(199 198 243)" }
        }
        className="navbar navbar-expand-lg mode-dark bg-body-dark "
      >
        <div className="container-fluid">
          <Link
            className={
              props.mode == "dark"
                ? "navbar-brand text-light"
                : "navbar-brand text-dark"
            }
            to="/"
          >
            <b>TextUtiles</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    props.mode == "dark"
                      ? "nav-link active text-light"
                      : "nav-link active text-dark"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    props.mode == "dark"
                      ? "nav-link active text-light"
                      : "nav-link active text-dark"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={async () => {
                  await props.changemode();
                    // props.showalert(`${props.mode} is enabled`, "success");
                }}
              />
              <label
                className={
                  props.mode == "dark"
                    ? "form-check-label lable text-light"
                    : "form-check-label lable text-dark"
                }
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode == "dark" ? "Light" : "Dark"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
