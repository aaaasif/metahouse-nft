import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

export const Injected = new InjectedConnector({
  supportedChainIds: [43113],
});

export const switchNetwork = async (chainId = 43113) => {
  const { ethereum } = window as any;
  try {
    await ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: Web3?.utils.toHex(chainId) }],
    });
  } catch (err) {
    console.log(err);
  }
};
