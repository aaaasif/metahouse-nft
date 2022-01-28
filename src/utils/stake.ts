import Web3 from "web3";
import { AbiItem } from "web3-utils";
import HPT from "./abis/HPT.json";
import sHPT from "./abis/sHPT.json";
import HPTStaking from "./abis/HPTStaking.json";

const HPT_Address = "0xfD8C324679632FEc09c668890494B3695258fA2f";
const sHPT_Address = "0x604f0483b0Fa10411d2a387C34d5777876e053A6";
const HPTStaking_Address = "0x9710e7Fc391Db3848a6A8324E13CaAebD753c029";

const { ethereum } = window as any;

const web3 = new Web3(ethereum);

const HPT_Contract = new web3.eth.Contract(HPT as AbiItem[], HPT_Address);
const sHPT_Contract = new web3.eth.Contract(sHPT as AbiItem[], sHPT_Address);
const HPTStaking_Contract = new web3.eth.Contract(
  HPTStaking as AbiItem[],
  HPTStaking_Address
);

const HPTBalance = async () => {
  return Web3.utils.fromWei(
    await HPT_Contract.methods.balanceOf(ethereum.selectedAddress).call()
  );
};

const sHPTBalance = async () => {
  return Web3.utils.fromWei(
    await sHPT_Contract.methods.balanceOf(ethereum.selectedAddress).call()
  );
};

export const approveHPT = async () => {
  const balance = await HPT_Contract.methods
    .balanceOf(ethereum.selectedAddress)
    .call();
  return await HPT_Contract.methods
    .approve(HPTStaking_Address, balance)
    .send({ from: ethereum.selectedAddress });
};

export const approvesHPT = async () => {
  const balance = await sHPT_Contract.methods
    .balanceOf(ethereum.selectedAddress)
    .call();
  return await sHPT_Contract.methods
    .approve(HPTStaking_Address, balance)
    .send({ from: ethereum.selectedAddress });
};

export const stake = async (_amount: string) => {
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods
    .stake(amount)
    .send({ from: ethereum.selectedAddress });
};

export const unStake = async (_amount: string) => {
  console.log(_amount);
  const amount = Web3.utils.toWei(_amount).toString();

  return await HPTStaking_Contract.methods
    .unstake(amount)
    .send({ from: ethereum.selectedAddress });
};

const APY = async () => {
  return String(await HPTStaking_Contract.methods.FixedAPY().call());
};

const totalAmountStaked = async () => {
  return String(await sHPT_Contract.methods.totalSupply().call());
};

// const stakedAmount = async () => {
//   const info = await HPTStaking_Contract.methods.info(ethereum.selectedAddress).call();
//   return info[0];
// };

// const pendingRewards = async () => {
//   const pendingAmount = await HPTStaking_Contract.methods
//     .pendingRewards(ethereum.selectedAddress)
//     .call();
//   return pendingAmount;
// };

export const claim = async () => {
  return await HPTStaking_Contract.methods
    .claim(ethereum.selectedAddress)
    .send({ from: ethereum.selectedAddress });
};

// const totalSupply = async () => {
//   return await HPT_Contract.methods.totalSupply().call();
// };

const allowedHPT = async () => {
  const allowance = Number(
    Web3.utils.fromWei(
      await HPT_Contract.methods
        .allowance(ethereum.selectedAddress, HPTStaking_Address)
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
        .allowance(ethereum.selectedAddress, HPTStaking_Address)
        .call()
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
    // console.log(await pendingRewards());

    return {
      stakedBalance,
      unstakedBalance,
      stakeApproved,
      unstakeApproved,
      pendingAmount: "0",
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