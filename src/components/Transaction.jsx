import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import SwapComponent from "./SwapComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Transaction.css";

function getLibrary(provider, connector) {
  return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}
function Transaction() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div
        className="Transaction"
        style={{ "padding-left": "15%", "padding-right": "15%" }}
      >
        <SwapComponent />
      </div>
    </Web3ReactProvider>
  );
}

export default Transaction;
