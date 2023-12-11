import React from "react";
import "./HeaderClient.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button/Button";

const HeaderClient = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) =>
          `header_button ${isActive && "active_header_button"}`
        }
        to="/client"
      >
        <Button className="buttonHeader" variant="outlined" size="large">
          Отправить заявку
        </Button>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `header_button ${isActive && "active_header_button"}`
        }
        to="/status"
      >
        <Button className="buttonHeader" variant="outlined" size="large">
          {" "}
          Просмотреть заявку
        </Button>
      </NavLink>
    </div>
  );
};

export default HeaderClient;
