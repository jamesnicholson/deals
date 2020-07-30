import React, { createContext, useReducer } from 'react'
import {Country} from '../api/interfaces'

interface IState {
    country: Country
}
interface IAction {
    type: string
    payload: any
}
const initialState = {
    country: {
      gloalId: "EBAY-AU",
      id: "15",
      name:" eBay Australia"
    }
}
function reducer(state: IState, action: IAction): IState{
    switch(action.type){
        case 'UPDATE_COUNTRY':
            return action.payload
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element{
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}
const Store = createContext<IState | any>(initialState)
export default Store