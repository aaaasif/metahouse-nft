import React from "react";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="pad">
      <div className="dashboard">
        <div className="dashboard_wrapper">
          <div>
            <p>
              <span>Market Cap</span>
              <b>-</b>
            </p>
            <p>
              <span>Circulating Supply (total)</span>
              <b>-</b>
            </p>
          </div>
          <div>
            <p>
              <span>HPT Price</span>
              <b>-</b>
            </p>
            <p>
              <span>Backing per HPT</span>
              <b>-</b>
            </p>
          </div>
          <div>
            <p>
              <span>gHPT Price</span>
              <b>-</b>
            </p>
            <p>
              <span>Current Index</span>
              <b>-</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
