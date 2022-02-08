import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import nftabi from "./abis/nft.json";

export const nftaddress = "0xE3775809E01c34cf5C7edc52F1aD6be6BE430Af7";
const metahouseaddress = "0x7dFd1c3eb0896A8C9CF995ED4f52C0DCe411B933";

const web3 = new Web3(window.ethereum);

const nft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);

// 2501-2520 hotel

export const stake = async (tokenid) => {
  const staking = metahouse.methods.stake(tokenid).send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};
export const stakehotel = async (tokenid) => {
  const staking = metahouse.methods.stake("1").send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};

export const unstake = async (tokenid) => {
  const unstaking = metahouse.methods.unstake("1").send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};
export const unstakehotel = async (tokenid) => {
  const unstaking = metahouse.methods.unstake("1").send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};

export const balance = async () => {
  const balance = metahouse.methods.balanceOf("0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A").call();
  return balance;
};

export const rewardcalculator = async (tokenid) => {
  const reward = metahouse.methods.rewardcalculator(tokenid).call();
  return reward;
};
export const rewardcalculatorhotel = async (tokenid) => {
  const reward = metahouse.methods.rewardcalculatorhotel(tokenid).call();
  return reward;
};
