import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, defs } from "recharts";
import "../styles/linechart.css";

const generateRandomData = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days.map((day) => ({
    name: day,
    in: Math.floor(Math.random() * (1000 - 200 + 1)) + 200,
    out: Math.floor(Math.random() * (1000 - 200 + 1)) + 200,
  }));
};

const LineChartComponent = () => {
  const lineData = generateRandomData();

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h5 className="chart-title">Waste In & Out</h5>
        <div className="chart-dropdown">
          <span className="chart-days">7 Days</span>
          <span className="chart-dropdown-toggle">
            <select className="select"></select>
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
          
          {/* White Glow Effect */}
          <defs>
            <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blurred" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid horizontal={true} vertical={false} stroke="#ccc" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis domain={[200, 1000]} stroke="gray" />
          <Tooltip />

          {/* Lines with White Glow Effect */}
          <Line 
            type="monotone" 
            dataKey="in" 
            stroke="#007bff" 
            strokeWidth={4} 
            filter="url(#whiteGlow)" 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="out" 
            stroke="#dc3545" 
            strokeWidth={4} 
            filter="url(#whiteGlow)" 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
