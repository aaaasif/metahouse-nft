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
              <b>$566,048,235</b>
            </p>
            <p>
              <span>Circulating Supply (total)</span>
              <b></b>
            </p>
          </div>
          <div>
            <p>
              <span>OHM Price</span>
              <b>$566,048,235</b>
            </p>
            <p>
              <span>Backing per OHM</span>
              <b>$566,048,235</b>
            </p>
          </div>
          <div>
            <p>
              <span>gOHM Price</span>
              <b>$566,048,235</b>
            </p>
            <p>
              <span>Current Index</span>
              <b>71.07 sOHM</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
