import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
// import nftabi from "./abis/nft.json";

export const nftaddress = "0x1C95Cd47C02d487C665EcCb3F6a0CB0323da9aa4";
const metahouseaddress = "0xAACBdF62b2477fC3caCf44f975c118578F89FD4C";

const web3 = new Web3(window.ethereum);

// const nft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);

// 2501-2520 hotel

const checkId = (tokenid) => {
  if (Number(tokenid) >= 2501 && Number(tokenid) <= 2520) return false;
  return true;
};

export const stake = async (tokenid) => {
  await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const stakehotel = async (tokenid) => {
  await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};

export const unstake = async (tokenid) => {
  await metahouse.methods.unstake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const unstakehotel = async (tokenid) => {
  await metahouse.methods.unstake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};

export const getBalance = async () => {
  const balance = await metahouse.methods.balanceOf(window.ethereum.selectedAddress).call();
  return balance;
};

export const rewardcalculator = async (tokenid) => {
  if (checkId(tokenid)) {
    const reward = await metahouse.methods.rewardcalculator(tokenid).call();
    return web3.utils.fromWei(reward);
  }

  const reward = await metahouse.methods.rewardcalculatorhotel(tokenid).call();
  return web3.utils.fromWei(reward);
};

export const getIsStakedTokenId = async (tokenId) => {
  return await metahouse.methods.stakecheck(tokenId).call();
};
