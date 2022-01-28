import { useWeb3React } from "@web3-react/core";
import React, { useContext } from "react";
import { Button } from "../../components";
import { WalletConnetContext } from "../../store/context/WalletConnetContext";
import DoStake from "./DoStake";
import "./Stake.scss";

const Stake: React.FC = () => {
  const { active } = useWeb3React();
  const { handleConnect, handleSwitchNetwork, loading, wrongNetwork } =
    useContext(WalletConnetContext);

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
      {wrongNetwork ? (
        <Button disabled={loading} variant="error" onClick={() => handleSwitchNetwork()}>
          Wrong Network
        </Button>
      ) : (
        <Button disabled={loading} onClick={() => handleConnect()}>
          Connect Wallet
        </Button>
      )}
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
