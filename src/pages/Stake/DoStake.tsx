import React, { useCallback, useEffect, useState } from "react";
import { Button, Info } from "../../components";
import { approveHPT, handleGetInitialData, unStake, stake, approvesHPT } from "../../utils/stake";

interface InitialProps {
  stakedBalance: string;
  unstakedBalance: string;
  stakeApproved: boolean;
  unstakeApproved: boolean;
}

const DoStake: React.FC = () => {
  const [isStake, setIsStake] = useState(true);
  const [withdraw, setWithdraw] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [initialState, setInitialState] = useState<InitialProps | null>(null);

  const handleGetData = useCallback(async () => {
    try {
      const data = await handleGetInitialData();
      console.log(data);
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
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async () => {
    try {
      await unStake(String(withdraw));

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeposit = async () => {
    try {
      await stake(String(deposit));

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const renderStake = (
    <div className="form_wrapper">
      {!initialState?.stakeApproved ? (
        <div>
          <span>First time staking HPT? Please approve (A Dao) to use your HPT for staking.</span>
          <Button onClick={() => handleApprove(true)}>Approve</Button>
        </div>
      ) : (
        <div>
          <div className="form_input">
            <input type="number" onChange={(e) => setDeposit(Number(e.target.value))} />
            <button>Max</button>
          </div>
          <Button onClick={() => handleDeposit()}>Stake</Button>
        </div>
      )}
    </div>
  );

  const renderUnstake = (
    <div className="form_wrapper">
      {!initialState?.stakeApproved ? (
        <div>
          <span>First time staking HPT? Please approve (A Dao) to use your HPT for staking.</span>
          <Button onClick={() => handleApprove(false)}>Approve</Button>
        </div>
      ) : (
        <div>
          <div className="form_input">
            <input type="number" onChange={(e) => setWithdraw(Number(e.target.value))} />
            <button>Max</button>
          </div>
          <Button onClick={() => handleWithdraw()}>Unstake</Button>
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
              <span>sHPT</span>
              <p>
                <span>gHPT</span> <Info />
              </p>
            </div>
            <div className="stake_content_wrapper-block_one">
              <div>
                <b>Unstaked Balance</b>
                <b>0.0000 HPT</b>
              </div>
              <div>
                <b>Total Staked Balance</b>
                <b>{initialState?.stakedBalance} HPT</b>
              </div>
            </div>
            <div className="stake_content_wrapper-block_two">
              <div>
                <b>Next Reward Amount</b>
                <b>0.0000 sHPT</b>
              </div>
              <div>
                <b>Next Reward Yield</b>
                <b>0.0000 sHPT</b>
              </div>
              <div>
                <b>ROI (5-Day Rate)</b>
                <b>0.0000 sHPT</b>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DoStake;
