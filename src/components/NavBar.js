import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
// import GridViewIcon from "@mui/icons-material/GridView";
// import PersonIcon from "@mui/icons-material/Person";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid pt-3 position-fixed">
        <div className="row">
          <div className="col-14 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                <div className="links">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <span></span>
                      HOME OWNER
                    </li>
                    <li className="nav-item">
                      <span></span>
                       BUY
                    </li>
                    <li className="nav-item">
                      <span></span>
                       RENT
                    </li>
                    <li className="nav-item">
                      <span></span>
                      OFF PLAN
                    </li>
                    <li className="nav-item">
                      <span></span>
                      LIST
                    </li>
                    <li className="nav-item">
                      <span></span>
                       COMMING SOON
                    </li>
                    <li className="nav-item">
                      <span></span>
                      BLOGS
                    </li>
                    <li className="nav-item">
                      <span></span>
                      ABOUT US
                    </li>
                    <li className="nav-item">
                      <span></span>
                      CONTACT US
                    </li>
                    
                    <li className="nav-item">
                    <button type="button" className="btn btn-outline-light position-relative" style={{height:"1px !important"}}>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                        </span>
                    </button>
                    </li>
                    <li className="nav-item">
                      <span></span>
                      Login/Register
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
