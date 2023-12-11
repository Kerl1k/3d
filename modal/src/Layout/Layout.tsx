import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <section>
      <div className="HeaderManager">
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/"
        >
          На главную
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default ClientLayout;
