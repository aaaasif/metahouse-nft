import React from "react";
import { Button } from "../../components";
import DoStake from "./DoStake";
import "./Stake.scss";

let active = true;

const Stake: React.FC = () => {
  const renderContent = (
    <div className="stake_wrapper_header">
      <div className="stake_wrapper_header-title">
        <h3>Single Stake(3,3)</h3>
        <span>45 mins to next rebase</span>
      </div>
      <div className="stake_wrapper_header-stats">
        <p>
          <span>APY</span>
          <b>2,668.6%</b>
        </p>
        <p>
          <span>Total Value Deposited</span>
          <b>$513,882,004</b>
        </p>
        <p>
          <span>Current Index</span>
          <b>71.2 sOHM</b>
        </p>
      </div>
    </div>
  );

  const renderConnectWallet = (
    <div className="stake_wrapper-connect_wallet">
      <Button>Connect Wallet</Button>
      <span>Connect your wallet to stake OHM </span>
    </div>
  );

  return (
    <div className="stake">
      <div className="stake_wrapper">
        {renderContent}
        {!active ? renderConnectWallet : <DoStake />}
      </div>
    </div>
  );
};

export default Stake;
