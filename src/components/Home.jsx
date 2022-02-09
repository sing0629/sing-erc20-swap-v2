import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import SwapComponent from "./SwapComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";

function getLibrary(provider, connector) {
  return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}
function Home() {
  return (
    <div className="home__body">
      <Web3ReactProvider getLibrary={getLibrary}>
        <div
          className="Transaction"
          style={{ "padding-left": "15%", "padding-right": "15%" }}
        >
          <SwapComponent />
        </div>
      </Web3ReactProvider>
    </div>
  );
}

export default Home;
