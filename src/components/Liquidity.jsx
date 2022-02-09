import React from "react";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import LiquidityComponent from "./LiquidityComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Liquidity.css";

function getLibrary(provider, connector) {
  return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}
function Liquidity() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div
        className="Liquidity"
        style={{ "padding-left": "15%", "padding-right": "15%" }}
      >
        <LiquidityComponent />
      </div>
    </Web3ReactProvider>
  );
}

export default Liquidity;
