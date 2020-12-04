import React, { createContext, useReducer } from "react";

//import appreducer
import AppReducer from './AppReducer'



//crate initial state

const initailState = {
  transactions: [
    { id: 1, description: "Flower", transactionAmount: -20 },
    { id: 2, description: "Salary", transactionAmount: 300 },
    { id: 3, description: "Book", transactionAmount: -10 },
    { id: 4, description: "Camera", transactionAmount: 150 },
  ]
}

//create the global context 

export const GlobalContext = createContext(initailState);

//create a provider for the global context

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initailState)

// Actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
    });
}
    return(
        <GlobalContext.Provider value = {
            {
                transactions : state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}