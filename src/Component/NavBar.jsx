import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  let handleLoutout = () => {
    localStorage.removeItem("react_app_token");
    navigate("/");
  };
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          PaviBlog - REDUX
        </a>
        <ul class="right hide-on-med-and-down">
          <li onClick={() => handleLoutout()}>
            <a class="waves-effect waves-light btn">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
