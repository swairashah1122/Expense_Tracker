// import React, { createContext, useReducer, useState } from 'react';
// import transactionReducer from './reducer';

// const initialData = [];

// export const TransactionContext = createContext();

// export const ContextProvider = ({ children }) => {
//     const [transactions, dispatch] = useReducer(transactionReducer, initialData);
//     const [balance, setBalance] = useState(0);

//     const addTransaction = (transaction) => {
//         dispatch({
//             type: 'ADD_TRANSACTION',
//             payload: transaction
//         });
//         // Update balance
//         setBalance(balance + transaction.amount);
//     }

//     const clearTransactions = () => {
//         dispatch({
//             type: 'CLEAR_TRANSACTIONS'
//         });
//     }

//     return (
//         <TransactionContext.Provider value={{
//             transactions,
//             addTransaction,
//             clearTransactions,
//             balance
//         }}>
//             {children}
//         </TransactionContext.Provider>
//     );
// }




import React, { createContext, useReducer, useEffect } from 'react';
import transactionReducer from './reducer';

const initialData = JSON.parse(localStorage.getItem('transactions')) || [];

export const TransactionContext = createContext();

export const ContextProvider = ({ children }) => {
    const [transactions, dispatch] = useReducer(transactionReducer, initialData);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    const clearTransactions = () => {
        dispatch({
            type: 'CLEAR_TRANSACTIONS'
        });
    }

    return (
        <TransactionContext.Provider value={{
            transactions,
            addTransaction,
            clearTransactions,
            balance: transactions.reduce((acc, curr) => acc + curr.amount, 0)  // Calculate balance from transactions
        }}>
            {children}
        </TransactionContext.Provider>
    );
}
