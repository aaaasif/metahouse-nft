import React from "react";
import WalletConnetProvider from "./context/WalletConnetContext";

const Provider: React.FC = ({ children }) => {
  return (
    <>
      <WalletConnetProvider>{children}</WalletConnetProvider>
    </>
  );
};

export default Provider;
