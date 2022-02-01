import Web3 from "web3";
import { AbiItem } from "web3-utils";
import HPT from "./abis/HPT.json";
import sHPT from "./abis/sHPT.json";
import HPTStaking from "./abis/HPTStaking.json";

const HPT_Address = "0xf03A1195FC63BB6b6Bb12aFA547FB9b77f16A550";
const sHPT_Address = "0xf4DA6CBE6ACEdEbAE3883fB58DA2937F19785033";
const HPTStaking_Address = "0x1c2ccB26d55DBd3c214296a496fb26F0f8e4CC09";

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

  const allowance = Web3.utils.fromWei(
    await HPT_Contract.methods
      .allowance(ethereum.selectedAddress, HPTStaking_Address)
      .call()
  );

  if (Number(allowance) >= Number(_amount)) {
    return await HPTStaking_Contract.methods
      .stake(amount)
      .send({ from: ethereum.selectedAddress });
  } else {
    console.log("Allowance is low,approve tokens to proceed");
  }
};

export const unStake = async (_amount: string) => {
  const amount = Web3.utils.toWei(_amount).toString();

  const allowance = Web3.utils.fromWei(
    await sHPT_Contract.methods
      .allowance(ethereum.selectedAddress, HPTStaking_Address)
      .call()
  );

  if (Number(allowance) >= Number(_amount)) {
    return await HPTStaking_Contract.methods
      .unstake(amount)
      .send({ from: ethereum.selectedAddress });
  } else {
    console.log("Approve token");
    return { error: true };
  }
};

// export const unStake = async (_amount: string) => {
//   const amount = Web3.utils.toWei(_amount).toString();

//   const allowance = Web3.utils.toBN(
//     Web3.utils.fromWei(
//       await sHPT_Contract.methods
//         .allowance(ethereum.selectedAddress, HPTStaking_Address)
//         .call()
//     )
//   );

//   if (allowance >= Web3.utils.toBN(_amount)) {
//     console.log(allowance, Web3.utils.toBN(_amount));
//     return await HPTStaking_Contract.methods
//       .unstake(amount)
//       .send({ from: ethereum.selectedAddress });
//   } else {
//     console.log("Approve balance to unstake");
//   }
// };

const APY = async () => {
  return String(await HPTStaking_Contract.methods.FixedAPY().call());
};

export const totalAmountStaked = async () => {
  return String(
    Web3.utils.fromWei(await sHPT_Contract.methods.totalSupply().call())
  );
};

// const stakedAmount = async () => {
//   const info = await HPTStaking_Contract.methods.info(ethereum.selectedAddress).call();
//   return info[0];
// };

const pendingRewards = async () => {
  const pendingAmount = Web3.utils.fromWei(
    await HPTStaking_Contract.methods
      .pendingRewards(ethereum.selectedAddress)
      .call()
  );
  return pendingAmount;
};

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

const getUnstakeLimit = async () => {
  return Web3.utils.fromWei(
    await HPTStaking_Contract.methods.UnStakeLimit().call()
  );
};

export const handleGetInitialData = async () => {
  try {
    const unstakedBalance = await HPTBalance();
    const stakedBalance = await sHPTBalance();
    const stakeApproved = await allowedHPT();
    const unstakeApproved = await allowedsHPT();
    const pendingAmount = await pendingRewards();
    const unstakeLimit = await getUnstakeLimit();

    return {
      stakedBalance: Number(stakedBalance),
      unstakedBalance: Number(unstakedBalance),
      stakeApproved,
      unstakeApproved,
      pendingAmount: Number(pendingAmount),
      unstakeLimit: Number(unstakeLimit),
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
