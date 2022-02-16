import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Injected } from "../../utils/connector";
import { Link } from "react-router-dom";
import "./Home.css";
import Pixel from "./Pixel";
import Stake from "./Stake";

const Home: React.FC = () => {
  const { activate } = useWeb3React();
  const [tab, setTab] = useState<"metahouse" | "pixel">("metahouse");
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      await activate(Injected);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-bg">
      <div className="bg-tran block_header">
        <div>
          <Link to="/storyline">Storyline</Link>
        </div>
        <div>
          <Link to="/whitepaper">Whitepaper</Link>
        </div>
      </div>
      <div className="bg-tran mt-4">
        <h4 className="text-uppercase  text-white">play genx</h4>
        <br />
        <div className="flex-even">
          <h6
            className={
              tab === "metahouse"
                ? "text-uppercase  text-white active"
                : "text-uppercase  text-white"
            }
            onClick={() => setTab("metahouse")}
          >
            METAHOUSE
          </h6>
          <h6
            className={
              tab === "pixel" ? "text-uppercase  text-white active" : "text-uppercase  text-white"
            }
            onClick={() => setTab("pixel")}
          >
            Pixel
          </h6>
        </div>
        {tab === "metahouse" ? (
          <Stake handleConnect={handleConnect} isConnecting={loading} />
        ) : (
          <Pixel handleConnect={handleConnect} isConnecting={loading} />
        )}
      </div>
    </div>
  );
};

export default Home;
