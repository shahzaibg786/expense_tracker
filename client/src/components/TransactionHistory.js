import React, { useContext, useEffect } from "react";
//import trasaction
import { Transaction } from "./Transaction";
//import global context
import { GlobalContext } from "../context/GlobalState";
import '../components/TransactionHistory.css';

export const TransactionHistory = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
//if we will not use empty arry then it will loop infinite
  useEffect(()=>{
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log(transactions);
  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key = {transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
