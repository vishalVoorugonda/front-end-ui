import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import '../styles/piechart.css';

const PieChartComponent = () => {
  const pieData = [
    { name: "Bojongsoang", value: 854 },
    { name: "Balaendan", value: 500 },
    { name: "Sukapura", value: 300 },
    { name: "Makarsari", value: 150 }
  ];

  const colors = ["#007bff", "#28a745", "#ffc107", "#dc3545"];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-item">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/684/684908.png" 
              alt="Location Icon" 
              className="location-icon"
            /> 
            {payload[0].payload.name}
          </p>
          <p className="tooltip-item">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/456/456283.png" 
              alt="User Icon" 
              className="user-icon"
            /> 
            {payload[0].value} Users
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="pie-container">
      <div className="head">
        <h2>Customer Region</h2>
        <div className="arrows">
          <img
            className="arrow"
            src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
            alt="Arrow"
          />
          <img
            className="arrow"
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="Arrow"
          />
        </div>
      </div>

      <div className="piechart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={110} // Increased size
              innerRadius={60} // Increased inner radius
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index]}
                  style={{
                    transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "center",
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="legend">
          {pieData.map((entry, index) => (
            <div key={index} className="legend-item">
              <div className="color-box" style={{ backgroundColor: colors[index] }}></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
