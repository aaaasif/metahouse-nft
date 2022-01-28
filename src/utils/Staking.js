import Web3 from "web3";
import HPT from "./abis/HPT.json";
import sHPT from "./abis/sHPT.json";
import HPTStaking from "./abis/HPTStaking.json";

const HPT_Address = "0x6BE7A3C44825F6E073EB80B95B7d116b6931f99d";
const sHPT_Address = "0xC0A46321280711BF46Dbc8aBBB08589e589e8b22";
const HPTStaking_Address = "0x26C8b3437a12e31Eb9faABa8cc874aE94a69eFFD";

const web3 = new Web3(window.ethereum);

const HPT_Contract = new web3.eth.Contract(HPT, HPT_Address);
const sHPT_Contract = new web3.eth.Contract(sHPT, sHPT_Address);
const HPTStaking_Contract = new web3.eth.Contract(
  HPTStaking,
  HPTStaking_Address
);

const HPTBalance = async () => {
  return Web3.utils.fromWei(
    HPT_Contract.methods.balanceOf(window.ethereum.selectedAddress).call()
  );
};

const sHPTBalance = async () => {
  return Web3.utils
    .fromWei(sHPT_Contract.methods.balanceOf(window.ethereum.selectedAddress))
    .call();
};

const approveHPT = async () => {
  const balance = await HPT_Contract.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();
  return await HPT_Contract.methods.approve(HPTStaking_Address, balance);
};

const approvesHPT = async () => {
  const balance = await sHPT_Contract.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();
  return await sHPT_Contract.methods.approve(HPTStaking_Address, balance);
};

const stake = async (_amount) => {
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods
    .stake(amount)
    .send({ from: window.ethereum.selectedAddress });
};

const unStake = async (_amount) => {
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods
    .unstake(_amount)
    .send({ from: window.ethereum.selectedAddress });
};

const APY = async () => {
  return await HPTStaking_Contract.methods.FixedAPY().call();
};

const stakedAmount = async () => {
  const info = await HPTStaking_Contract.methods
    .info(window.ethereum.selectedAddress)
    .call();
  return info[0];
};

const pendingRewards = async () => {
  const pending = await HPTStaking_Contract.methods
    .pendingRewards(window.ethereum.selectedAddress)
    .call();
};

const claim = async () => {
  return await HPTStaking_Contract.methods
    .claim(window.ethereum.selectedAddress)
    .send({ from: window.ethereum.selectedAddress });
};

const totalSupply = async () => {
  return await HPT_Contract.methods.totalSupply().call();
};

const allowedHPT = async () => {
  const allowance = Number(
    Web3.utils.fromWei(
      await HPT_Contract.methods
        .allowance(window.ethereum.selectedAddress, HPTStaking_Address)
        .call()
    )
  );

  if (allowance > 0) {
    return true;
  } else {
    return false;
  }
};

const allowedsHPT = async () => {
  const allowance = Number(
    Web3.utils.fromWei(
      await sHPT_Contract.methods
        .allowance(window.ethereum.selectedAddress, HPTStaking_Address)
        .call()
    )
  );

  if (allowance > 0) {
    return true;
  } else {
    return false;
  }
};
