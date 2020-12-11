import React, {useContext} from "react";
import '../components/Transaction.css';
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utills/format";

export const Transaction = ({transaction}) => {
  //adding function transaction is positive or negative (get sign)
  const sign = transaction.transactionAmount <0 ? '-' : '+';

  const { deleteTransaction} = useContext(GlobalContext);

  return (
    <li className={transaction.transactionAmount <0 ? 'minus' : 'plus'}>
      {transaction.description}
      <span>{sign}${numberWithCommas(Math.abs(transaction.transactionAmount))}</span>
      <button 
      onClick ={()=>deleteTransaction(transaction._id)}
      className="delete-btn">X</button>
    </li>
  );
};
