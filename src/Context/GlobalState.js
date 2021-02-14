import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// create the initial state

const initialState = {
    transactions: [
        { id: 1, description: 'Income 1', transactionAmount: 1000 },
        { id: 2, description: 'Expense 2', transactionAmount: -100 },
        { id: 3, description: 'Income 3', transactionAmount: 3000 },
        { id: 4, description: 'Expense 4', transactionAmount: -500 },
    ]
}


// create the global context 

export const GlobalContext = createContext(initialState);


// Create a Provider for the Global Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider >
    )
}