import React, { useState } from "react";
import { Button, Info } from "../../components";

let isApproved = false;

const DoStake: React.FC = () => {
  const [isStake, setIsStake] = useState(true);

  const renderStake = (
    <div className="form_wrapper">
      {isApproved ? (
        <div>
          <span>First time staking OHM? Please approve (A Dao) to use your OHM for staking.</span>
          <Button>Approve</Button>
        </div>
      ) : (
        <div>
          <div className="form_input">
            <input type="number" />
            <button>Max</button>
          </div>
          <Button>Stake</Button>
        </div>
      )}
    </div>
  );

  const renderUnstake = (
    <div className="form_wrapper">
      {isApproved ? (
        <div>
          <span>First time staking OHM? Please approve (A Dao) to use your OHM for staking.</span>
          <Button>Approve</Button>
        </div>
      ) : (
        <div>
          <div className="form_input">
            <input type="number" />
            <button>Max</button>
          </div>
          <Button>Unstake</Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="stake_container">
      <div className="stake_container-header">
        <p className={isStake ? "active" : "inactive"} onClick={() => setIsStake(true)}>
          Stake
        </p>
        <p className={!isStake ? "active" : "inactive"} onClick={() => setIsStake(false)}>
          Unstake
        </p>
      </div>
      {isStake ? renderStake : renderUnstake}
      <div className="stake_content_wrapper">
        <div className="stake_content_wrapper-switch">
          <span>sOHM</span>
          <p>
            <span>gOHM</span> <Info />
          </p>
        </div>
        <div className="stake_content_wrapper-block_one">
          <div>
            <b>Unstaked Balance</b>
            <b>0.0000 OHM</b>
          </div>
          <div>
            <b>Total Staked Balance</b>
            <b>0.0000 OHM</b>
          </div>
        </div>
        <div className="stake_content_wrapper-block_two">
          <div>
            <b>Next Reward Amount</b>
            <b>0.0000 sOHM</b>
          </div>
          <div>
            <b>Next Reward Yield</b>
            <b>0.0000 sOHM</b>
          </div>
          <div>
            <b>ROI (5-Day Rate)</b>
            <b>0.0000 sOHM</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoStake;
