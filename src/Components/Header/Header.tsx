import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Injected } from "../../utils/connector";
import { getBalance } from "../../utils/metahouse";
import "./Header.css";

const Header: React.FC = () => {
  const { active, activate, account } = useWeb3React();
  const [balance, setBalance] = useState("");

  const handleGetBalance = useCallback(async () => {
    if (account) {
      setBalance(await getBalance());
    }
  }, [account]);

  useEffect(() => {
    handleGetBalance();
  }, [handleGetBalance]);

  const handleConnect = async () => {
    try {
      await activate(Injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="justify-content-md-between">
          <Navbar.Brand href="/" className="d-flex flex-row justify-content-between ">
            <div className="p-2">
              <img
                src="https://i.ibb.co/jws8b4y/house-1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Bear house"
              />
            </div>
            <div>
              <h4 className="pt-2" style={{ fontWeight: "bold" }}>
                META HOUSE
              </h4>
            </div>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex_center ">
              <Link className="header_link" to="/storyline">
                Storyline
              </Link>
              <Link className="header_link" to="/whitepaper">
                Whitepaper
              </Link>
              <button className="header-button">{balance ?? 0} MH</button>
              {!active ? (
                <button className="header-button" onClick={() => handleConnect()}>
                  Connect Wallet
                </button>
              ) : (
                <button className="header-button">
                  {account && `${account.slice(0, 6)}...${account.slice(account.length - 6)}`}
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
