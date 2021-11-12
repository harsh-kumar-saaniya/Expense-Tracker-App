import React, { createContext, useReducer } from 'react';

// import the reducer
import AppReducer from './AppReducer';

// create the initial state
const initialState = {
    transactions: [],
};

// create the global context
export const GlobalContext = createContext(initialState);

// create a provide for the global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                delTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
