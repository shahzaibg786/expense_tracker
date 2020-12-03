import React from 'react';
import './App.css';
//import global provide
import {GlobalProvider} from './context/GlobalState';

//Components
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {AddTransaction} from './components/AddTransaction';
import { TransactionHistory } from './components/TransactionHistory';


function App() {
  return (
    
    <GlobalProvider >
      <Header/>
      <div className = 'container'>
      <Balance/>
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
