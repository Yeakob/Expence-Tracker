import React,{createContext,useReducer } from 'react';
import AppReducer from './AppReducer';

const InitialState={
    transactions: [
        { id: 1, text: 'Flower', amount: -200 },
         { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -100 },
       { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext=createContext(InitialState);

export const Globalprovider =({children})=>{
    const [state,dispatch]=useReducer(AppReducer,InitialState);

 function Delete(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id
        })
    }

    function Add(transaction){
        dispatch({
            type:'Add_Transaction',
            payload:transaction
        })
    } 
    return (<GlobalContext.Provider
    value={{
        transactions : state.transactions,
        Delete,
        Add
    }}>{children}</GlobalContext.Provider>);
}