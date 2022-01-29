import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button } from "../../components";
import { WalletConnetContext } from "../../store/context/WalletConnetContext";
import { getSingleStake, totalAmountStaked } from "../../utils/stake";
import DoStake from "./DoStake";
import "./Stake.scss";

interface StakeDataProps {
  apy: string;
}

const Stake: React.FC = () => {
  const { active } = useWeb3React();
  const [staked, setStaked] = useState<String>();
  const [stakeData, setSingleStake] = useState<StakeDataProps | null>(null);
  const { handleConnect, handleSwitchNetwork, loading, wrongNetwork } =
    useContext(WalletConnetContext);

  const handleGetData = useCallback(async () => {
    try {
      setStaked(await totalAmountStaked());
      console.log(staked);
      const data = await getSingleStake();
      console.log(data);
      if (data) setSingleStake(data);
    } catch (error) {
      console.log(error);
    }
  }, [staked]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const renderContent = (
    <div className="stake_wrapper_header">
      <div className="stake_wrapper_header-title">
        <h3>Single Stake(1,1)</h3>
        <span></span>
      </div>
      <div className="stake_wrapper_header-stats">
        <p>
          <span>APY</span>
          <b>{stakeData?.apy}%</b>
        </p>
        <p>
          <span>Total HPT Deposited</span>
          <b>{staked} HPT</b>
        </p>
        <p>
          <span>Current Index</span>
          <b>-</b>
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
