import { createContext, useContext, useReducer, FC } from "react";



const stateApp = {
    country: {
      gloalId: "EBAY-AU",
      id: "15",
      name:" eBay Australia"
    }
  }





export const StateContext = createContext({});
interface Props {
    // any other props that come into the component, you don't have to explicitly define children.
    reducer:any
    initialSate:any[]
    children:any
    }

export const StateProvider: FC<Props> = ({reducer, initialSate, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialSate)}>
        {children}
    </StateContext.Provider>
)