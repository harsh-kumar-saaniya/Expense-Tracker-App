import React, { useState, useContext } from 'react';
import { TransactionContext } from '../Context/transContext';

export const AddTransaction = () => {
    const { transactions, addTransaction } = useContext(TransactionContext)
    const [newDesc, setDesc] = useState("")
    const [newAmount, setAmount] = useState(0)

    const handleAddition = (e) => {
        e.preventDefault();
        console.log(newDesc, newAmount)
        addTransaction({
            amount: newAmount,
            desc: newDesc
        })
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddition}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        placeholder="Detail of Transaction"
                        value={newDesc}
                        onChange={(e) => setDesc(e.target.value)}

                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="text"
                        id="transactionamount"
                        placeholder="Enter Transaction amount"
                        value={newAmount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
