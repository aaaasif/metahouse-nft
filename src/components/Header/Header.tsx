import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";

import "./Header.scss";
import { Wallet } from "..";
import Button from "../Button/Button";
import { WalletConnetContext } from "../../store/context/WalletConnetContext";

const Header: React.FC = () => {
  const { active, account } = useWeb3React();
  const { handleConnect, loading, wrongNetwork, handleSwitchNetwork } =
    useContext(WalletConnetContext);

  return (
    <header className="header pad">
      {wrongNetwork ? (
        <Button disabled={loading} variant="error" onClick={() => handleSwitchNetwork()}>
          Wrong Network
        </Button>
      ) : (
        <Button
          onClick={!active ? () => handleConnect() : undefined}
          style={{ padding: "10px" }}
          disabled={loading}
        >
          <Wallet />
          <span>
            {active
              ? account && `${account.slice(0, 6)}...${account.slice(account.length - 6)}`
              : "Connect Wallet"}
          </span>
        </Button>
      )}
    </header>
  );
};

export default Header;
