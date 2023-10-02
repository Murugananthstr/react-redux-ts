import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdraw, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button className="btn btn-primary" onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <button className="btn btn-primary" onClick={() => withdraw(10)}>
        Withdraw
      </button>
      <button className="btn btn-primary" onClick={() => bankrupt()}>
        Bankrupt
      </button>
    </div>
  );
}

export default App;
