import React, { useContext } from 'react';
import { TransactionContext } from '../Context/transContext';

export const AccountSummary = () => {
    const { transactions, addTransaction } = useContext(TransactionContext)

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    return (
        <div>
            <div className="balance">
                <h4>Current Balance</h4>
                <h1>{getIncome() + getExpense()} </h1>
            </div>
            <div className="inc-exp-container">

                <div>
                    <h4>INCOME</h4>
                    <p className="money plus">
                        {getIncome()}
                    </p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className="money minus">
                        {getExpense()}
                    </p>
                </div>
            </div>
        </div>
    )
}
