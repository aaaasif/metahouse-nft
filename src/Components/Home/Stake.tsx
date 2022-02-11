import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { fetchUserStakedNfts, getUserNfts } from "../../utils/fetchUserNft";
import {
  stake,
  stakehotel,
  stakeid,
  unstake,
  unstakehotel,
  approvemetabool,
  approvemeta,
  epoch,
} from "../../utils/metahouse";

const Stake: React.FC<{
  handleConnect: () => Promise<void>;
  isConnecting: boolean;
}> = ({ handleConnect, isConnecting }) => {
  const { active, account } = useWeb3React();
  const [nftData, setNftData] = useState<any>(null);
  const [stakedData, setStakedData] = useState<any>(null);
  const [tokenId, setTokenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [reward, setReward] = useState(0);

  const handleGetNfts = useCallback(async () => {
    if (account) {
      setLoading(true);
      console.log("bool", await approvemetabool());
      setIsApproved(await approvemetabool());
      const data = await getUserNfts(account);
      const ids = await stakeid(account);
      const sData = await fetchUserStakedNfts(ids);
      console.log(ids);
      setNftData(data);
      console.log(data);
      if (sData?.length) {
        const newStakedData = await Promise.all(
          sData.map(async (s) => {
            const rewradEpoch = await epoch(account, s.token_id);
            return {
              ...s,
              rewardsPending: rewradEpoch,
            };
          })
        );

        setStakedData(newStakedData);

        setReward(newStakedData.reduce((acc, s) => s.rewardsPending + acc, 0));
      }
      setLoading(false);
    }
  }, [account]);

  useEffect(() => {
    handleGetNfts();
  }, [handleGetNfts]);

  const handleStake = async (tokenId: string) => {
    setLoading(true);
    try {
      if (Number(tokenId) >= 2501 && Number(tokenId) <= 2520) {
        await stakehotel(tokenId);
        setLoading(false);
        window.location.reload();
        return;
      }
      await stake(tokenId);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnstake = async (tokenId: string) => {
    setLoading(true);
    try {
      const d = stakedData.find((s) => s.token_id === tokenId);

      if (Number(tokenId) >= 2501 && Number(tokenId) <= 2520) {
        await unstakehotel(tokenId, d.rewardsPending);
        setLoading(false);
        window.location.reload();
        return;
      }
      await unstake(tokenId, d.rewardsPending);
      window.location.reload();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    setLoading(true);
    try {
      await approvemeta(account);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderStake = (
    <div>
      <h4>Staked</h4>
      {!nftData ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!stakedData?.length ? (
            <div>
              <p>none</p>
            </div>
          ) : (
            <div className="card__wrapper">
              {stakedData?.map((nft, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTokenId(nft.token_id)}
                    className={tokenId === nft.token_id ? "nft_image active" : "nft_image"}
                  >
                    <img src={nft.image} alt={nft.token_id} width={100} height={100} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div>
        <button
          className="connect-wallet"
          disabled={loading || !stakedData?.length}
          onClick={() => (!tokenId ? alert("select one nft to unstake") : handleUnstake(tokenId))}
        >
          Unstake
        </button>
      </div>
    </div>
  );

  const renderUnstake = (
    <>
      <h4>Unstaked</h4>
      {!nftData ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!nftData?.length ? (
            <div>
              <p>none</p>
            </div>
          ) : (
            <div className="card__wrapper">
              {nftData?.map((nft, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTokenId(nft.token_id)}
                    className={tokenId === nft.token_id ? "nft_image active" : "nft_image"}
                  >
                    <img src={nft.image} alt={nft.token_id} width={100} height={100} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div>
        <button
          className="connect-wallet"
          disabled={loading || !nftData?.length}
          onClick={() => (!tokenId ? alert("select one nft to stake") : handleStake(tokenId))}
        >
          Stake
        </button>
      </div>
    </>
  );

  if (!active) {
    return (
      <button className="connect-wallet" disabled={isConnecting} onClick={() => handleConnect()}>
        Connect Wallet
      </button>
    );
  }

  return (
    <>
      {!isApproved ? (
        <button className="connect-wallet" disabled={loading} onClick={() => handleApprove()}>
          Approve
        </button>
      ) : (
        <div>
          <div style={{ marginBottom: 30 }}>{renderStake}</div>
          <div style={{ marginBottom: 30 }}>{renderUnstake}</div>
          <div>
            {stakedData?.length > 0 && (
              <div>
                <h4>Rewards</h4>
                <p>
                  <b>{reward * 10000}</b>
                </p>
                {/* <button onClick={() => days()}> Days</button> */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Stake;
