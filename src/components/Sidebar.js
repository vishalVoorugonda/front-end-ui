import React, { useState } from "react";
import { FaHome, FaUsers, FaClipboardList, FaChartPie, FaWallet, FaLocationArrow, FaRegIdCard, FaSwatchbook, FaAnchor } from "react-icons/fa";
import '../styles/sidebar.css'
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Customers", icon: <FaUsers /> },
    { name: "Category", icon: <FaRegIdCard /> },
    { name: "Transactions", icon: <FaClipboardList /> },
    { name: "Pick-up", icon: <FaLocationArrow /> },
    { name: "Stock", icon: <FaAnchor /> },
    { name: "Reports", icon: <FaChartPie /> },
    { name: "Financial", icon: <FaWallet /> },
  ];

  return (
    <aside className="aside-container">
      
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/3666/3666231.png" alt="logo"/>
        <h2 className="header">WasteBank</h2>
      </div>
      

       <ul className="nav-links">
        {menuItems.map((item, index) => (
          <li key={index} className={`nav-item ${activeItem === item.name ? "active" : ""}`}>
            <a
              href="#"
              className={`${activeItem === item.name ? "active-link" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              <div>{item.icon}</div> 
              <div className="item">
              <span>{item.name}</span>
             <div className="active-div"> {activeItem === item.name && <span className="active-indicator"></span>}  </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      
      <div className="footer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5855/5855009.png"
          alt="User"
        />
        <div className="footer-text">
        <small className="">Welcome</small>
          <p className="">WB Borsinar</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
