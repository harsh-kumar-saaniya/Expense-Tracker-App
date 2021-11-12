import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountsSummary from './Components/AccountsSummary';
import TransactionHistory from './Components/TransactionHistory';
import AddTransactions from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountsSummary />
        <TransactionHistory />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
