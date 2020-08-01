import React, {useContext} from 'react';
import {ApolloProvider} from '@apollo/client'
import {StoreProvider} from './store'
import client from './api/client'
import Feed from "./components/feed";

const App = () => {
  return (
    <>
      <StoreProvider>
        <ApolloProvider client={client}>
          <Feed />
        </ApolloProvider>
      </StoreProvider>
    </>
  );
};
export default App;

