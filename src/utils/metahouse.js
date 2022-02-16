import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import pixelabi from "./abis/pixel.json";
import nftabi from "./abis/nft.json";
import { hotelIds } from "./hotelIds";

export const chain = "0x4";
export const nftaddress = "0x9F84d4b1Da783E70253ef0081e30563f09aa8751";
export const pixeladdress = "0x44d69a1045DD44C1ae3a2B7AfF39d39B1d6751cD";
const metahouseaddress = "0x094a3125E30deF14C609FBd641896b1F837909C1";
const web3 = new Web3(window.ethereum);

const metanft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);
const pixelnft = new web3.eth.Contract(pixelabi, pixeladdress);

export const checkId = (tokenid) => {
  if (hotelIds.some((s) => s === tokenid)) return false;
  return true;
};

export const approvemetabool = async (address) => {
  const value = await metanft.methods
    .isApprovedForAll(window.ethereum.selectedAddress, metahouseaddress)
    .call();
  console.log("value", value);
  return value;
};
export const approvepixelbool = async (address) => {
  return await pixelnft.methods
    .isApprovedForAll(window.ethereum.selectedAddress, metahouseaddress)
    .call();
};
export const approvemeta = async (address) => {
  return await metanft.methods.setApprovalForAll(metahouseaddress, true).send({
    from: address,
  });
};
export const approvepixel = async (address) => {
  return await pixelnft.methods.setApprovalForAll(metahouseaddress, true).send({
    from: address,
  });
};
export const stake = async (tokenid) => {
  await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const stakepixel = async (tokenid) => {
  await metahouse.methods.stakepixel(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const stakehotel = async (tokenid) => {
  await metahouse.methods.stake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};

export const unstake = async (tokenid, reward) => {
  await metahouse.methods.unstake(tokenid, reward).send({
    from: window.ethereum.selectedAddress,
  });
};
export const unstakepixel = async (tokenid, reward) => {
  await metahouse.methods.unstakepixel(tokenid, reward).send({
    from: window.ethereum.selectedAddress,
  });
};
export const unstakehotel = async (tokenid, reward) => {
  await metahouse.methods.unstake(tokenid, reward).send({
    from: window.ethereum.selectedAddress,
  });
};

export const getBalance = async () => {
  const balance = await metahouse.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();

  return web3.utils.fromWei(balance);
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

export const staked = async () => {
  const res = await metahouse.methods.staked("2").call();
  console.log("res", res);
};

export const rewardcalc = async (tokenid) => {
  const res = await metahouse.methods.rewardcalculator(2).call();
  console.log("res", res);
};

export const epoch = async (address, tokenId) => {
  const res = await metahouse.methods.getEpoch(address, tokenId).call();
  return Math.floor((res[1] - res[0]) / 900);
};

export const firstepoch = async (address, tokenid) => {
  const res = await metahouse.methods.getEpoch(address, tokenid).call();
  return res[0], tokenid;
};

// Hotel id
// 303 375 421 501 625 668 702 895 921 1015 1106 1523 1847 1980 2015 2100 2298 2341 2450 2458
