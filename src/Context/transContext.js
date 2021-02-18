import react, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 200, desc: 'Groceries' },
    { amount: 4000, desc: 'Shopping' },
    { amount: 250, desc: 'Mobile' },
    { amount: 870, desc: 'Car' },
]

export const TransactionContext = createContext(initialTransactions);

// making global provider Here....

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function addTransaction({ transObj }) {
        dispatch({
            type: "Add_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
} 