import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { getUserNfts } from "../../utils/fetchUserNft";
import { stake, stakehotel, unstake, unstakehotel } from "../../utils/metahouse";

const Stake: React.FC<{ handleConnect: () => Promise<void> }> = ({ handleConnect }) => {
  const { active, account } = useWeb3React();
  const [nftData, setNftData] = useState<any>(null);
  const [tokenId, setTokenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetNfts = useCallback(async () => {
    if (account) {
      setLoading(true);
      const data = await getUserNfts(account);
      setNftData(data);
      console.log(data);
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
      if (Number(tokenId) >= 2501 && Number(tokenId) <= 2520) {
        await unstakehotel(tokenId);
        setLoading(false);
        window.location.reload();
        return;
      }
      await unstake(tokenId);
      window.location.reload();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderStake = (
    <div>
      <h4>Staked</h4>
      {!nftData ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!nftData?.filter((f) => f.isStaked === true)?.length ? (
            <div>
              <p>none</p>
            </div>
          ) : (
            nftData
              ?.filter((f) => f.isStaked === true)
              ?.map((nft, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTokenId(nft.token_id)}
                    style={{ transform: tokenId === nft.token_id ? "scale(1.1)" : "scale(1)" }}
                  >
                    <img src={nft.image} alt={nft.token_id} width={40} height={40} />
                  </div>
                );
              })
          )}
        </div>
      )}
      <div>
        <button
          className="connect-wallet"
          disabled={loading || !nftData?.filter((f) => f.isStaked === true)?.length}
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
          {!nftData?.filter((f) => f.isStaked === false)?.length ? (
            <div>
              <p>none</p>
            </div>
          ) : (
            <div className="card__wrapper">
              {nftData
                ?.filter((f) => f.isStaked === false)
                ?.map((nft, index) => {
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
          disabled={loading || !nftData?.filter((f) => f.isStaked === false)?.length}
          onClick={() => (!tokenId ? alert("select one nft to stake") : handleStake(tokenId))}
        >
          Stake
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-tran mt-4">
      <h4 className="text-uppercase  text-white">play genx</h4>
      <br />
      {!active ? (
        <button className="connect-wallet" onClick={() => handleConnect()}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <div style={{ marginBottom: 30 }}>{renderStake}</div>
          <div>{renderUnstake}</div>
        </div>
      )}
    </div>
  );
};

export default Stake;