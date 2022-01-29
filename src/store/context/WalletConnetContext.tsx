import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Injected, switchNetwork } from "../../utils/connector";

export type WalletConnectProps = {
  loading: boolean;
  wrongNetwork: boolean;
  sidebar: boolean;
  handleConnect: () => void;
  handleSwitchNetwork: () => void;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: WalletConnectProps = {
  loading: false,
  wrongNetwork: false,
  sidebar: false,
  setSidebar: () => {},
  handleConnect: () => {},
  handleSwitchNetwork: () => {},
};

export const WalletConnetContext = createContext<WalletConnectProps>(initialState);

const WalletConnetProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { activate, error } = useWeb3React();

  const handleError = useCallback(() => {
    if (!!error && error instanceof UnsupportedChainIdError) {
      setWrongNetwork(true);
      return;
    }

    setWrongNetwork(false);
  }, [error]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  const handleConnect = async () => {
    setLoading(true);
    await activate(Injected);
    setLoading(false);
  };

  const handleSwitchNetwork = async () => {
    setLoading(true);
    await switchNetwork();
    setLoading(false);
  };

  return (
    <WalletConnetContext.Provider
      value={{ loading, handleConnect, wrongNetwork, handleSwitchNetwork, sidebar, setSidebar }}
    >
      {children}
    </WalletConnetContext.Provider>
  );
};

export default WalletConnetProvider;
