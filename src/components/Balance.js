import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";


//sfc	Stateless Function Component
//ssf	Functional setState
//imrc - Import React, Component

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transactions => transactions.transactionAmount);
    const total = amount.reduce((acc,item) => (acc+=item),0).toFixed(2);
    return ( 
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
     );
}