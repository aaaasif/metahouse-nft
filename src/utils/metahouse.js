import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import nftabi from "./abis/nft.json";

export const nftaddress = "0xEc9323e01B0D3213A980b02e43Ba68Db06b9ae15";
const metahouseaddress = "0xe1a07cbf1B00e70F162B502E7DD713f27225f273";

const web3 = new Web3(window.ethereum);

const nft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);

// 2501-2520 hotel

const checkId = (tokenid) => {
  if (Number(tokenid) >= 2501 && Number(tokenid) <= 2520) return false;
  return true;
};

export const stake = async (tokenid) => {
  return await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const stakehotel = async (tokenid) => {
  const staking = await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};

export const unstake = async (tokenid) => {
  const unstaking = await metahouse.methods.unstake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const unstakehotel = async (tokenid) => {
  const unstaking = await metahouse.methods.unstake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};

export const balance = async () => {
  const balance = await metahouse.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();
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
