import React, { useContext } from 'react';
import Transaction from './Transaction';

// import the global context
import { GlobalContext } from '../Context/GlobalState';

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
