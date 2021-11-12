import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.transactionAmount > 0 ? '+' : '-';
  const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

  return (
    <li className={transactionType}>
      {transaction.description}
      <span>
        {sign}$ {Math.abs(transaction.transactionAmount)}
      </span>
      <button
        onClick={() => delTransaction(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
