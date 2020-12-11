import React, { useContext } from 'react';
import '../components/AccountSummary.css';
//import global context
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utills/format";

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transactions => transactions.transactionAmount);
    const income = amount.filter(item => (item>0))
    .reduce((acc,item) => (acc+=item),0)
    .toFixed(2);

    const expense = (amount.filter(item => (item<0))
    .reduce((acc,item) => (acc+=item),0)*-1)
    .toFixed(2);

    return ( 
        <div className = 'inc-exp-container'>
            <div>
                <h4>INCOME</h4>
                <p className = 'moneyplus'>
                    ${numberWithCommas(income)}
                </p>
            </div>
            <div>
            <h4>EXPENSE</h4>
                <p className = 'moneyminus'>
                    ${numberWithCommas(expense)}
                </p>
            </div>
        </div>
     );
}
 
