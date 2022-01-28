import React from "react";
import { useWeb3React } from "@web3-react/core";

import { Wallet } from "..";
import { Injected } from "../../utils/connector";
import Button from "../Button/Button";

import "./Header.scss";

const Header: React.FC = () => {
  const { activate, active, account } = useWeb3React();

  const handleConnect = async () => {
    await activate(Injected);
  };

  return (
    <header className="header pad">
      <Button onClick={!active ? () => handleConnect() : undefined} style={{ padding: "10px" }}>
        <Wallet />
        <span>
          {active
            ? account && `${account.slice(0, 6)}...${account.slice(account.length - 6)}`
            : "Connect Wallet"}
        </span>
      </Button>
    </header>
  );
};

export default Header;
