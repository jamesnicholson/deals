import React, {createContext} from 'react';
import {ApolloProvider} from '@apollo/client'
import Feed from "./components/feed";
import client from './api/client'
import {StateProvider} from './store/stateprovider'
import reducers,{appState} from './store/reducers'

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <StateProvider initialState={appState} reducer={reducers} >
         <Feed />
      </StateProvider>
    </ApolloProvider>
    </>
  );
};
export default App;

