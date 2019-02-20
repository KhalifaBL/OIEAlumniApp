import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className=" Sidebar wrapper ">
      <div className="header">
        <div className="profile-pic">
          <center>
            <p className="nameTag">M</p>
          </center>
        </div>

        <div className="name">
          <center>
            <h1>Mark Daly</h1>
          </center>
        </div>
        <div className="email">
          <center>
            <h2>mdaly@emporia.edu</h2>
          </center>
        </div>
      </div>
      <div className="main">
        <h1 className="roles">Roles:</h1>
        <div>
          <p>Admin</p>
          <p>Data Manager</p>
          <p>Observer</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
