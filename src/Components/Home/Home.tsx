import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Injected } from "../../utils/connector";
import { rewardcalculator } from "../../utils/metahouse";
import "./Home.css";
import Stake from "./Stake";

const Home: React.FC = () => {
  const [tokenId, setTokenId] = useState<string>("");
  const { activate, active } = useWeb3React();

  const handleConnect = async () => {
    try {
      await activate(Injected);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReward = async () => {
    try {
      await rewardcalculator(tokenId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-bg">
      <div className="bg-tran">
        <h4 className="text-uppercase text-white">Reward</h4>
        {/* <div className="stGen">
          <div className="d-flex justify-content-center align-items-center">
            <button className="my-btn"></button>
            <input className="my-input" placeholder="1st Gen" type="text" />
          </div>
        </div> */}
        {/* <br />
        <span>1000/1000 Minted</span>
        <div>
          <button onClick={decrease} className="my-color increment">
            -
          </button>
          <input className="midel-input" type="text" value={num} readOnly />
          <button onClick={increase} className="my-color">
            +
          </button>
        </div>
        <p>Current cost: per token</p>
        <span>
          
        </span> */}
        <div>
          <input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
        </div>
        <div>
          {!active ? (
            <button className="connect-wallet" onClick={() => handleConnect()}>
              Connect wallet
            </button>
          ) : (
            <button className="connect-wallet" onClick={() => handleReward()}>
              View Rewards
            </button>
          )}
        </div>
      </div>

      <Stake handleConnect={handleConnect} />
    </div>
  );
};

export default Home;
