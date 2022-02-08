import Web3 from "web3";
import metahouseabi from "./abis/metahouse.json";
import nftabi from "./abis/nft.json";

const nftaddress = "0x474FfF0e906aD3d90831cC61491f282ab8Ae7C82";
const metahouseaddress = "0xA4A8a73729a61338964272075f850bCB394fF374";

const web3 = new Web3(window.ethereum);

const nft = new web3.eth.Contract(nftabi, nftaddress);
const metahouse = new web3.eth.Contract(metahouseabi, metahouseaddress);

export const stake = async (tokenid) => {
  const staking = metahouse.methods.stake("1").send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};

export const unstake = async (tokenid) => {
  const unstaking = metahouse.methods.unstake("1").send({
    from: "0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A",
  });
};
export const balance = async () => {
  const balance = metahouse.methods.balanceOf("0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A").call();
};
