import Web3 from "web3";
import { AbiItem } from "web3-utils";
import HPT from "./abis/HPT.json";
import sHPT from "./abis/sHPT.json";
import HPTStaking from "./abis/HPTStaking.json";

const HPT_Address = "0x6BE7A3C44825F6E073EB80B95B7d116b6931f99d";
const sHPT_Address = "0xC0A46321280711BF46Dbc8aBBB08589e589e8b22";
const HPTStaking_Address = "0x26C8b3437a12e31Eb9faABa8cc874aE94a69eFFD";

const { ethereum } = window as any;

const web3 = new Web3(ethereum);

const HPT_Contract = new web3.eth.Contract(HPT as AbiItem[], HPT_Address);
const sHPT_Contract = new web3.eth.Contract(sHPT as AbiItem[], sHPT_Address);
const HPTStaking_Contract = new web3.eth.Contract(HPTStaking as AbiItem[], HPTStaking_Address);

const HPTBalance = async () => {
  return Web3.utils.fromWei(await HPT_Contract.methods.balanceOf(ethereum.selectedAddress).call());
};

const sHPTBalance = async () => {
  return Web3.utils.fromWei(await sHPT_Contract.methods.balanceOf(ethereum.selectedAddress).call());
};

export const approveHPT = async () => {
  const balance = await HPT_Contract.methods.balanceOf(ethereum.selectedAddress).call();
  return await HPT_Contract.methods
    .approve(HPTStaking_Address, balance)
    .send({ from: ethereum.selectedAddress });
};

export const approvesHPT = async () => {
  const balance = await sHPT_Contract.methods.balanceOf(ethereum.selectedAddress).call();
  return await sHPT_Contract.methods
    .approve(HPTStaking_Address, balance)
    .send({ from: ethereum.selectedAddress });
};

export const stake = async (_amount: string) => {
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods.stake(amount).send({ from: ethereum.selectedAddress });
};

export const unStake = async (_amount: string) => {
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods.unstake(amount).send({ from: ethereum.selectedAddress });
};

const APY = async () => {
  return String(await HPTStaking_Contract.methods.FixedAPY().call());
};

// const stakedAmount = async () => {
//   const info = await HPTStaking_Contract.methods.info(ethereum.selectedAddress).call();
//   return info[0];
// };

// const pendingRewards = async () => {
//   const pending = await HPTStaking_Contract.methods.pendingRewards(ethereum.selectedAddress).call();
// };

// const claim = async () => {
//   return await HPTStaking_Contract.methods
//     .claim(ethereum.selectedAddress)
//     .send({ from: ethereum.selectedAddress });
// };

// const totalSupply = async () => {
//   return await HPT_Contract.methods.totalSupply().call();
// };

const allowedHPT = async () => {
  const allowance = Number(
    Web3.utils.fromWei(
      await HPT_Contract.methods.allowance(ethereum.selectedAddress, HPTStaking_Address).call()
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
      await sHPT_Contract.methods.allowance(ethereum.selectedAddress, HPTStaking_Address).call()
    )
  );

  if (allowance > 0) {
    return true;
  } else {
    return false;
  }
};

export const handleGetInitialData = async () => {
  try {
    const unstakedBalance = await HPTBalance();
    const stakedBalance = await sHPTBalance();
    const stakeApproved = await allowedHPT();
    const unstakeApproved = await allowedsHPT();

    return {
      stakedBalance,
      unstakedBalance,
      stakeApproved,
      unstakeApproved,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getSingleStake = async () => {
  try {
    const apy = await APY();

    return {
      apy,
    };
  } catch (error) {
    console.log(error);
  }
};
