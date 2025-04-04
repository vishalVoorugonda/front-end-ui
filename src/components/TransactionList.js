import React from "react";
import "../styles/transactionlist.css"; 

const transactions = [
  { name: "Paper Factory", type: "Deposit", amount: "$291", date: "April 1, 2025", icon: "https://cdn-icons-png.flaticon.com/128/9678/9678536.png", bgColor: "#007bff" },
  { name: "Plastic Factory", type: "Deposit", amount: "$601", date: "April 2, 2025", icon: "https://cdn-icons-png.flaticon.com/128/9678/9678536.png", bgColor: "#007bff" },
  { name: "Hotel Garden", type: "Transfer", amount: "$256", date: "April 3, 2025", icon: "https://cdn-icons-png.flaticon.com/128/16182/16182723.png", bgColor: "#ff3b30" },
  { name: "Textile Mill", type: "Deposit", amount: "$598", date: "April 4, 2025", icon: "https://cdn-icons-png.flaticon.com/128/9678/9678536.png", bgColor: "#007bff" },
  { name: "Recycling Center", type: "Transfer", amount: "$399", date: "April 5, 2025", icon: "https://cdn-icons-png.flaticon.com/128/16182/16182723.png", bgColor: "#ff3b30" },
];

const TransactionList = () => {
  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h5 className="transaction-title">Last Transactions</h5>
        <a href="#" className="see-all">See All</a>
      </div>
      <ul className="transaction-list">
        {transactions.map((txn, index) => (
          <li key={index} className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon-type">
                <span className="transaction-icon" style={{ backgroundColor: txn.bgColor }}>
                  <img src={txn.icon} alt={txn.type} />
                </span>
                <span className="transaction-type">{txn.type}</span>
              </div>
              <span className="transaction-name">{txn.name}</span>
            </div>
            <div className="transaction-details">
              <span className="transaction-amount">{txn.amount}</span>
              <span className="transaction-date">{txn.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
