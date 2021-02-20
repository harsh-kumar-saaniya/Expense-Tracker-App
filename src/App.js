import react from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountSummary } from './Components/AccountSummary';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransaction } from './Components/AddTransaction';
import { TransactionProvider } from './Context/transContext'

function App() {
  return (
    <TransactionProvider >
      <Header />
      <div className="container">
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </TransactionProvider >
  );
}

export default App;
