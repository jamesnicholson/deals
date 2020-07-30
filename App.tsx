import React, {useContext} from 'react';
import {ApolloProvider} from '@apollo/client'
import Feed from "./components/feed";
import client from './api/client'
const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Feed />
      </ApolloProvider>
    </>
  );
};
export default App;

