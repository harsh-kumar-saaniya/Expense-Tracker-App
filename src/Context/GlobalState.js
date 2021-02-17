import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// create the initial state

const initialState = {
    transactions: [
        { description: 'Income 1', transactionAmount: 1000 },
        { description: 'Expense 2', transactionAmount: -100 },
        { description: 'Income 3', transactionAmount: 3000 },
        { description: 'Expense 4', transactionAmount: -500 },
    ]
}


// create the global context 

export const GlobalContext = createContext(initialState);


// Create a Provider for the Global Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // function addTransaction(newTransaction) {
    //     dispatch({
    //         type: 'ADD_TRANSACTION',
    //         payload: {
    //             TransDesc: newTransaction.description,
    //             TransAmount: newTransaction.transactionAmount,
    //         }
    //     })
    // }

    return (
        // <GlobalContext.Provider value={{ transactions: state.transactions }}>
        //     {children}
        // </GlobalContext.Provider >
    )
}