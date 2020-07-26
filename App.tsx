import React, {useReducer} from 'react';
import {ApolloProvider} from '@apollo/client'
import Feed from "./components/feed";
import client from './api/client'
import countryContext from './store/country'
import {countryReducer} from './store/reducers'
import {Country} from './api/interfaces'
import {ActionType} from './store/types'
//https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

type stateData = {
  type: ActionType.UPDATE_COUNTRY
  country: Country
}

const countryState = {
  type: ActionType.UPDATE_COUNTRY,
  country: {
    gloalId: "EBAY-AU",
    id: "15",
    name:" eBay Australia"
  }
}






////
const props : Country  = {
  gloalId: "EBAY-AU",
  id: "15",
  name:" eBay Australia"
}


const App = () => {
  const [state, dispatch] = useReducer(countryReducer, countryState);

  return (
    <>
    <ApolloProvider client={client}>
        <countryContext.Provider value={countryState}>
          <Feed />
        </countryContext.Provider>
    </ApolloProvider>
    </>
  );
};
export default App;

