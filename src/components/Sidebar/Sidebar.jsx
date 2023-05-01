import React from "react";

const SideBar = (props) => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div>SAPIEN SYSTEMS</div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        SAPIEN SYSTEMS
      </button>
    </div>
  );
};
export default SideBar;
