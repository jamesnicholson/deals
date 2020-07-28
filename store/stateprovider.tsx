import React,{ createContext, useContext, useReducer, FC } from "react";
import {Country} from '../api/interfaces'
export const StateContext = createContext({});
interface Props {
    reducer:any
    initialState:any
    children:any
    }

export const StateProvider: FC<Props> = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)