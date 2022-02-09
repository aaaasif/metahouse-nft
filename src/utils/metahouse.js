import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
// import nftabi from "./abis/nft.json";

export const nftaddress = "0xE92C980669dBb127b64094bB321CBfc0789d5Bb6";
const metahouseaddress = "0x74cc619E0f851A28f6FBe183403dcb0d7661A879";

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

export const stakeid = async (address) => {
  return await metahouse.methods.ids(address).call();
};
export const getIsStakedTokenId = async (tokenId) => {
  return await metahouse.methods.stakecheck(tokenId).call();
};
