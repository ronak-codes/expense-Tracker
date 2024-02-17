import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


// Initial State

const initialState = {
    transactions:[
        {id:1, text:"Food", amount:200},
        {id:2, text:"Books", amount:2000},
        {id:3, text:"Print", amount:-800},
        {id:4, text:"Tickets", amount:-1000},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions that triggers reducer
    const deleteTransaction = (id) =>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    const addTransactions = (transaction) =>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })

    }
    return (
        <GlobalContext.Provider 
        value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}