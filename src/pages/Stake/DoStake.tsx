import React, { useCallback, useEffect, useState } from "react";
import { Button, Info } from "../../components";
import { approveHPT, approvesHPT, handleGetInitialData } from "../../utils/stake";

interface InitialProps {
  stakedBalance: string;
  unstakedBalance: string;
  stakeApproved: boolean;
  unstakeApproved: boolean;
  Apy: string;
}

const DoStake: React.FC = () => {
  const [isStake, setIsStake] = useState(true);
  const [initialState, setInitialState] = useState<InitialProps | null>(null);

  const handleGetData = useCallback(async () => {
    try {
      const data = await handleGetInitialData();
      if (data) setInitialState(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const handleApprove = async (stake: boolean) => {
    try {
      if (stake) {
        await approveHPT();
      } else {
        await approvesHPT();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderStake = (
    <div className="form_wrapper">
      {!initialState?.stakeApproved ? (
        <div>
          <span>First time staking OHM? Please approve (A Dao) to use your OHM for staking.</span>
          <Button onClick={() => handleApprove(true)}>Approve</Button>
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
      {!initialState?.unstakeApproved ? (
        <div>
          <span>First time staking OHM? Please approve (A Dao) to use your OHM for staking.</span>
          <Button onClick={() => handleApprove(false)}>Approve</Button>
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
      {initialState ? (
        <>
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
        </>
      ) : null}
    </div>
  );
};

export default DoStake;
