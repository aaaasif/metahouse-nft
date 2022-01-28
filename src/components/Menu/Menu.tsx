import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Menu.scss";
import logo from "../../assets/images/logo.png";
import { Buy, Dashboard, Discord, Stake, Twitter, Whitepaper } from "..";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" width={"100%"} height={"auto"} />
        </Link>
      </div>
      <div className="menu_links">
        <NavLink to="/">
          <Dashboard />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/stake">
          <Stake />
          <span>Stake</span>
        </NavLink>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Buy />
          <span>Buy $HPT</span>
        </a>
        <a
          href="https://highpointdao.gitbook.io/highpoint/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whitepaper />
          <span>Whitepaper</span>
        </a>
        <a href="https://discord.gg/wSdZQyegwm" target="_blank" rel="noopener noreferrer">
          <Discord />
          <span>Discord</span>
        </a>
        <a href="https://twitter.com/HighPointStake" target="_blank" rel="noopener noreferrer">
          <Twitter />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
