import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";

import "./Header.scss";
import { Logout, Wallet } from "..";
import Button from "../Button/Button";
import menu from "../../assets/icons/menu.svg";

import { WalletConnetContext } from "../../store/context/WalletConnetContext";

const Header: React.FC = () => {
  const { active, account, deactivate } = useWeb3React();
  const { handleConnect, loading, wrongNetwork, handleSwitchNetwork, setSidebar } =
    useContext(WalletConnetContext);

  return (
    <header className="header pad">
      {wrongNetwork ? (
        <Button disabled={loading} variant="error" onClick={() => handleSwitchNetwork()}>
          Wrong Network
        </Button>
      ) : (
        <Button
          onClick={!active ? () => handleConnect() : () => deactivate()}
          style={{ padding: "10px" }}
          disabled={loading}
          title={!active ? "connect wallet" : "Disconnect"}
        >
          {!active ? <Wallet /> : <Logout />}
          <span>
            {active
              ? account && `${account.slice(0, 6)}...${account.slice(account.length - 6)}`
              : "Connect Wallet"}
          </span>
        </Button>
      )}
      <button className="menu" onClick={() => setSidebar(true)}>
        <img src={menu} alt="menu bar" />
      </button>
    </header>
  );
};

export default Header;
