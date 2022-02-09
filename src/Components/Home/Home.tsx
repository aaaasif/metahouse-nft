import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Injected } from "../../utils/connector";
import "./Home.css";
import Pixel from "./Pixel";
import Stake from "./Stake";

const Home: React.FC = () => {
  const { activate } = useWeb3React();
  const [tab, setTab] = useState<"metahouse" | "pixel">("metahouse");

  const handleConnect = async () => {
    try {
      await activate(Injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-bg">
      <div className="bg-tran">
        <h4 className="text-uppercase text-white">APY</h4>
        <h5>10000%</h5>
        {/* <div className="stGen">
          <div className="d-flex justify-content-center align-items-center">
            <button className="my-btn"></button>
            <input className="my-input" placeholder="1st Gen" type="text" />
          </div>
        </div> */}
        {/* <br />
        <span>1000/1000 Minted</span>
        <div>
          <button onClick={decrease} className="my-color increment">
            -
          </button>
          <input className="midel-input" type="text" value={num} readOnly />
          <button onClick={increase} className="my-color">
            +
          </button>
        </div>
        <p>Current cost: per token</p>
        <span>
          
        </span> */}
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
          <Stake handleConnect={handleConnect} />
        ) : (
          <Pixel handleConnect={handleConnect} />
        )}
      </div>
    </div>
  );
};

export default Home;
