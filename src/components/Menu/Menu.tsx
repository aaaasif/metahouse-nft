import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Menu.scss";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/icons/dashboard.svg";
import buy from "../../assets/icons/buy.svg";
import twitter from "../../assets/icons/twitter.svg";
import discord from "../../assets/icons/discord.svg";
import stake from "../../assets/icons/stake.svg";
import whitepaper from "../../assets/icons/whitepaper.svg";

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
          <img src={dashboard} alt="dashboard" width={18} height={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/stake">
          <img src={stake} alt="stake" width={18} height={18} />
          <span>Stake</span>
        </NavLink>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={buy} alt="buy" width={18} height={18} />
          <span>Buy $HPT</span>
        </a>
        <a
          href="https://highpointdao.gitbook.io/highpoint/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whitepaper} alt="whitepaper" width={18} height={18} />
          <span>Whitepaper</span>
        </a>
        <a href="https://discord.gg/wSdZQyegwm" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="discord" width={18} height={18} />
          <span>Discord</span>
        </a>
        <a href="https://twitter.com/HighPointStake" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" width={18} height={18} />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
