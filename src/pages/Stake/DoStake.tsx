import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Button } from "../../components";
import {
  approveHPT,
  handleGetInitialData,
  unStake,
  stake,
  approvesHPT,
  claim,
} from "../../utils/stake";

import loader from "../../assets/icons/loader.png";
import error from "../../assets/icons/error.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

interface InitialProps {
  stakedBalance: number;
  unstakedBalance: number;
  stakeApproved: boolean;
  unstakeApproved: boolean;
  pendingAmount: number;
  unstakeLimit: number;
}

const DoStake: React.FC = () => {
  const [isStake, setIsStake] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [toaster, setToaster] = useState(false);
  const [unstakeMaxDisable, setUnstakeMaxDisable] = useState(false);
  const [withdraw, setWithdraw] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [initialState, setInitialState] = useState<InitialProps | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("method") === "unstake") setIsStake(false);
    else setIsStake(true);
  }, [isStake, searchParams]);

  useMemo(() => {
    if (initialState) {
      if (withdraw > initialState?.unstakeLimit) setUnstakeMaxDisable(true);
      else setUnstakeMaxDisable(false);
    } else setUnstakeMaxDisable(true);
  }, [withdraw, initialState]);

  const handleGetData = useCallback(async () => {
    try {
      const data = await handleGetInitialData();
      console.log(data);
      if (data) {
        setInitialState(data);
        if (data.unstakedBalance <= 0 && data.stakedBalance <= 0) setModal("stake");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const handleApprove = async (stake: boolean) => {
    setLoading(true);
    try {
      if (stake) {
        await approveHPT();
      } else {
        await approvesHPT();
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (initialState && initialState?.stakedBalance <= 0) {
      setModal("unstake");
      return;
    }
    setLoading(true);
    try {
      await unStake(String(withdraw));
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeposit = async () => {
    setLoading(true);
    try {
      await stake(String(deposit));
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClaim = async () => {
    setLoading(true);
    try {
      await claim();
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderStake = (
    <div className="form_wrapper">
      {!initialState?.stakeApproved ? (
        <div>
          <span style={{ textAlign: "center" }}>
            First time staking HPT? Please approve (A Dao) to use your HPT for staking.
          </span>
          <Button disabled={loading} onClick={() => handleApprove(true)}>
            Approve
          </Button>
        </div>
      ) : (
        <div>
          <div className="form_input">
            <input
              type="number"
              value={deposit === 0 ? "" : deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
            />
            <button onClick={() => setDeposit(Math.floor(initialState.unstakedBalance))}>
              Max
            </button>
          </div>
          <Button disabled={loading} onClick={() => handleDeposit()}>
            Stake
          </Button>
        </div>
      )}
    </div>
  );

  const renderUnstake = (
    <div className="form_wrapper">
      {!initialState?.unstakeApproved ? (
        <div>
          <span style={{ textAlign: "center" }}>
            First time unstaking HPT? Please approve (A Dao) to use your sHPT for unstaking.
          </span>
          <Button disabled={loading} onClick={() => handleApprove(false)}>
            Approve
          </Button>
        </div>
      ) : (
        <div className="form_group_wrapper">
          <div className={toaster ? "toaster active" : "toaster"}>
            Max limit for unstake is {initialState.unstakeLimit}
          </div>
          <div className="form_input">
            <input
              type="number"
              value={withdraw === 0 ? "" : withdraw}
              onChange={(e) => setWithdraw(Number(e.target.value))}
            />
            <button
              onClick={() => {
                let value = Math.floor(initialState.stakedBalance) > initialState.unstakeLimit;
                let withdrawAmt = value
                  ? initialState.unstakeLimit
                  : Math.floor(initialState.stakedBalance);
                setWithdraw(withdrawAmt);
              }}
            >
              Max
            </button>
          </div>
          <Button
            disabled={loading || unstakeMaxDisable}
            onMouseEnter={() =>
              withdraw > initialState.unstakeLimit ? setToaster(true) : undefined
            }
            onMouseLeave={() => setToaster(false)}
            onClick={() => handleWithdraw()}
          >
            Unstake
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="stake_container">
        <div className="stake_container-header">
          <p
            className={isStake ? "active" : "inactive"}
            onClick={() => {
              setIsStake(true);
              navigate("/stake?method=stake");
            }}
          >
            Stake
          </p>
          <p
            className={!isStake ? "active" : "inactive"}
            onClick={() => {
              setIsStake(false);
              navigate("/stake?method=unstake");
            }}
          >
            Unstake
          </p>
        </div>
        {initialState ? (
          <>
            {isStake ? renderStake : renderUnstake}
            <div className="stake_content_wrapper">
              <div className="stake_content_wrapper-block_one">
                <div>
                  <b>Unstaked Balance</b>
                  <b>
                    {new Intl.NumberFormat("en-US", {}).format(initialState?.unstakedBalance)} HPT
                  </b>
                </div>
                <div>
                  <b>Total Staked Balance</b>
                  <b>
                    {new Intl.NumberFormat("en-US", {}).format(initialState?.stakedBalance)} sHPT
                  </b>
                </div>
              </div>
              <div className="stake_content_wrapper-block_two">
                <div>
                  <b>Pending Reward Amount</b>
                  <b>
                    {new Intl.NumberFormat("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                    }).format(initialState?.pendingAmount)}{" "}
                    sHPT
                  </b>
                </div>
                <div>
                  <b></b>
                  <Button onClick={() => handleClaim()}>Claim</Button>
                </div>
                {/* <div>
                <b>Next Reward Yield</b>
                <b>0.0000 sHPT</b>
              </div>
              <div>
                <b>ROI (5-Day Rate)</b>
                <b>0.0000 sHPT</b>
              </div> */}
              </div>
            </div>
          </>
        ) : (
          <div style={{ height: 150 }}>
            <div className="loader">
              <img src={loader} alt="loader" />
            </div>
          </div>
        )}
      </div>
      <div className={loading ? "transaction_loader active" : "transaction_loader"}>
        <div className="loader">
          <img src={loader} alt="loader" />
          <p>Don't refresh your page</p>
        </div>
      </div>
      <div className={modal === "stake" ? "transaction_loader active" : "transaction_loader"}>
        <div className="loader">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gridGap: 10,
            }}
          >
            <img src={error} alt="error icon" />
            <p>You didn't have enough HPT token </p>
            <a href="/" target="_blank" rel="noopener">
              <Button>Buy</Button>
            </a>
          </div>
        </div>
      </div>
      <div
        className={modal === "unstake" ? "transaction_loader active" : "transaction_loader"}
        onClick={() => setModal(null)}
      >
        <div className="loader">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gridGap: 10,
            }}
          >
            <p>You didn't have enough sHPT token to unstake</p>
            <Link to="/stake?method=stake">
              <Button>Stake HPT</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoStake;
