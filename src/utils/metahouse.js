import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import pixelabi from "./abis/pixel.json";
import nftabi from "./abis/nft.json";

export const chain = "0x4";
export const nftaddress = "0x60b5b87b4FA876d9b1277cc76C415f6C6e109eF7";
export const pixeladdress = "0x92f391277C2C264a5Cef4afA0013F569187B2CdB";
const metahouseaddress = "0x21299FDA4b6970ba43c9DD825938298F837D25e8";
const web3 = new Web3(window.ethereum);

const metanft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);
const pixelnft = new web3.eth.Contract(pixelabi, pixeladdress);
// 2501-2520 hotel

const checkId = (tokenid) => {
  if (Number(tokenid) >= 2501 && Number(tokenid) <= 2520) return false;
  return true;
};

export const approvemetabool = async (address) => {
  // console.log("bool", metanft.methods.isApprovedForAll(address, metahouse));
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

export const unstake = async (tokenid) => {
  await metahouse.methods.unstake(tokenid).send({
    from: window.ethereum.selectedAddress,
  });
};
export const unstakepixel = async (tokenid) => {
  await metahouse.methods.unstakepixel(tokenid).send({
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

// export const rewardcalculatormeta = async (tokenId) => {
//   console.log("id", tokenId);
//   // const re = await metahouse.methods.rewardcalculator("1").call();
//   // console.log("re", re);
//   const rewards = await Promise.all(
//     tokenId.map(async (id) => {
//       if (checkId(id.token_id)) {
//         const reward = await metahouse.methods.rewardcalculator(1).call();
//         console.log("id", id.token_id);
//         console.log("rew", reward);
//         return web3.utils.fromWei(reward);
//       }

//       const reward = await metahouse.methods
//         .rewardcalculatorhotel(id.token_id)
//         .call();
//       return web3.utils.fromWei(reward);
//     })
//   );

//   return rewards.reduce((acc, d) => d + acc, 0);
// };

// export const rewardcalculatorpixel = async (tokenId) => {
//   const rewards = await Promise.all(
//     tokenId.map(async (id) => {
//       const reward = await metahouse.methods
//         .rewardcalculatorpixel(id.token_id)
//         .call();
//       return web3.utils.fromWei(reward);
//     })
//   );
//   return rewards.reduce((acc, d) => d + acc, 0);
// };

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

export const epoch = async () => {
  const res = await metahouse.methods
    .getEpoch("0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A", "1")
    .call();
  console.log(res);
};

export const days = async () => {
  //endepoch-startepoch/86400
};
