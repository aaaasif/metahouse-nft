import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import nftabi from "./abis/nft.json";

const nftaddress = "0xD0494c40586F58b3a71c80da3380C00e74c64369";
const metahouseaddress = "0xC0DD734777CEFCb726c5C3D12F68E70856d7ec6a";

const web3 = new Web3(window.ethereum);

const nft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);

export const stake = async (tokenid) => {
  const staking = metahouse.methods.stake(tokenid).send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};
export const stakehotel = async (tokenid) => {
  const staking = metahouse.methods.stake(tokenid).send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};

export const unstake = async (tokenid) => {
  const unstaking = metahouse.methods.unstake(tokenid).send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};
export const unstakehotel = async (tokenid) => {
  const unstaking = metahouse.methods.unstake(tokenid).send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};

export const balance = async () => {
  const balance = metahouse.methods
    .balanceOf("0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A")
    .call();
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
