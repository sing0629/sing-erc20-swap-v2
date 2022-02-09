import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Liquidity from "./components/Liquidity";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import your favorite web3 convenience library here

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/Liquidity" component={Liquidity}>
            <Liquidity />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
