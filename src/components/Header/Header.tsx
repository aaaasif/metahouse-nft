import React from "react";
import { Wallet } from "..";
import Button from "../Button/Button";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header pad">
      <Button>
        <Wallet />
        <span>Connect Wallet</span>
      </Button>
    </header>
  );
};

export default Header;
