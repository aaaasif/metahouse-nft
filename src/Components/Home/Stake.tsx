import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Injected } from "../../utils/connector";
import { getUserNfts } from "../../utils/fetchUserNft";
import { stake, stakehotel } from "../../utils/metahouse";

const Stake: React.FC = () => {
  const { active, activate, account } = useWeb3React();
  const [nftData, setNftData] = useState<any>(null);
  const [tokenId, setTokenId] = useState("");

  const handleGetNfts = useCallback(async () => {
    if (account) {
      const data = await getUserNfts(account);
      setNftData(data);
    }
  }, [account]);

  useEffect(() => {
    handleGetNfts();
  }, [handleGetNfts]);

  const handleConnect = async () => {
    try {
      await activate(Injected);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStake = async (tokenId: string) => {
    try {
      if (Number(tokenId) >= 2501 && Number(tokenId) <= 2520) {
        await stakehotel(tokenId);
        return;
      }
      await stake(tokenId);
    } catch (error) {
      console.log(error);
    }
  };

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
          <h4>Staked</h4>
          {!nftData ? (
            <div>Loading...</div>
          ) : (
            <div>
              {nftData.map((nft, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTokenId(nft.token_id)}
                    style={{ transform: tokenId === nft.token_id ? "scale(1.1)" : "scale(1)" }}
                  >
                    <img src={nft.image} alt={nft.token_id} width={40} height={40} />
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <button className="connect-wallet" onClick={() => handleStake(tokenId)}>
              Stake
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stake;
