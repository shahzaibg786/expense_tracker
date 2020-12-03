import React, { useContext } from "react";
//import global context
import { GlobalContext } from "../context/GlobalState";
//import trasaction
import { Transaction } from "./Transaction";
import '../components/TransactionHistory.css';

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  //console.log(transactions);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key = {transaction.id} transaction={transaction} />

        ))}
      </ul>
    </div>
  );
};
