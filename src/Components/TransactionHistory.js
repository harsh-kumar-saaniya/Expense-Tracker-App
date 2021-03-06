import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';
import { TransactionContext } from '../Context/transContext';

export const TransactionHistory = () => {
    let { transactions } = useContext(TransactionContext);
    const [operator, setOperator] = useState('')

    return (
        <div>
            <h3> Transaction History </h3>
            <ul className="list">
                {transactions.map((transObj, ind) => {
                    return (

                        <li className={transObj.amount > 0 ? 'plus' : 'minus'} key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                            <button className="delete-btn">X</button>
                        </li>

                    )
                })}

            </ul>
        </div>
    )
}
