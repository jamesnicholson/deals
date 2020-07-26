import  { useState, useReducer, createContext } from 'react'
import { Country, CountryState } from '../api/interfaces'

const props : Country  = {
    gloalId: "EBAY-AU",
    id: "15",
    name:" eBay Australia"
}

export const countryState : CountryState = {
    country: props,
    setCountry: (): void => {},
}

const [country , setCountry] = useState<Country>(props)





const countryContext = createContext<Country>(props)
export default countryContext