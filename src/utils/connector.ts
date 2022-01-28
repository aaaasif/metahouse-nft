import { InjectedConnector } from "@web3-react/injected-connector";

export const Injected = new InjectedConnector({
  supportedChainIds: [43113],
});

const switchRequest = () => {
  const { ethereum } = window as any;
  return ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0xa869" }],
  });
};

// const addChainRequest = () => {
//   const { ethereum } = window as any;

//   return ethereum.request({
//     method: "wallet_addEthereumChain",
//     params: [
//       {
//         chainId: "0xa86a",
//         chainName: "Avalanche Mainnet",
//         rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
//         blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
//         nativeCurrency: {
//           name: "AVAX",
//           symbol: "AVAX",
//           decimals: 18,
//         },
//       },
//     ],
//   });
// };

const addChainRequest = () => {
  const { ethereum } = window as any;

  return ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0xa869",
        chainName: "Avalanche Testnet",
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://testnet.snowtrace.io/"],
        nativeCurrency: {
          name: "AVAX",
          symbol: "AVAX",
          decimals: 18,
        },
      },
    ],
  });
};

export const switchNetwork = async (chainId = 3) => {
  const { ethereum } = window as any;
  if (ethereum) {
    try {
      await switchRequest();
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await addChainRequest();
          await switchRequest();
        } catch (addError) {
          console.log(error);
        }
      }
      console.log(error);
    }
  }
};
