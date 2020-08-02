import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native';
import {StoreProvider} from './store'
import client from './api/client'
import Feed from "./components/feed";
import {Root} from 'native-base'
const App = () => {
  return (
    <>
      <StoreProvider>
         <ApolloProvider client={client}>
          <NavigationContainer>
            <Root>
              <Feed />
            </Root>
          </NavigationContainer>
        </ApolloProvider>
      </StoreProvider>
    </>
  );
};
export default App;

