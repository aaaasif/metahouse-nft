import React, { useCallback, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Injected } from "../../utils/connector";
import { getUserNfts } from "../../utils/fetchUserNft";

const Stake: React.FC = () => {
  const { active, activate, account } = useWeb3React();

  const handleGetNfts = useCallback(async () => {
    if (account) {
      const data = await getUserNfts(account);
      console.log(data);
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
        </div>
      )}
    </div>
  );
};

export default Stake;
