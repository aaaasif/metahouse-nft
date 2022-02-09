import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import pixelabi from "./abis/pixel.json";
// import nftabi from "./abis/nft.json";

export const nftaddress = "0x828cC55FF5f92e122001dE363fd418C5D20B65CB";
const metahouseaddress = "0x785ADF68603fb8c5ce63449920F755DD9Fc9605c";
const pixeladdress = "0xcc3ef5E58943a367547bAC40f7464390af100384";
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
export const stakepixel = async (tokenid) => {
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
export const unstakepixel = async (tokenid) => {
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
  return web3.utils.fromWei(balance);
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
export const stakeidpixel = async (address) => {
  return await metahouse.methods.idspixel(address).call();
};
export const getIsStakedTokenId = async (tokenId) => {
  return await metahouse.methods.stakecheck(tokenId).call();
};
