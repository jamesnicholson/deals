import React, { createContext, useReducer } from 'react'
import {ICountry} from '../api/interfaces'

interface IState {
    country: ICountry
}
interface IAction {
    type: string
    payload: any
}
export const initialState = {
    country: {
      gloalId: "EBAY-AU",
      id: "15",
      name:" eBay Australia"
    },
    deals:[{
        itemId: "",
        title: "",
        url: "",
        endsAt:  "",
        image225:  "",
        currency:  "",
        price:  "",
        originalPrice:  "",
        discountPercentage:  "",
        quantity:  "",
        shippingCost:  "",
        dealUrl: "",
    }]
}
export const Store = createContext<IState | any>(initialState)

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
