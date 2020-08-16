import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createIconSetFromFontello } from 'react-native-vector-icons';
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        dealsByOffset:{
          read(existing: any[], { args }) {
            console.log(existing)
            console.log(args)
          }
        }
        // Similar to AC2 local resolvers, this field policy
        // controls how the Query.darkModeEnabled field
        // gets read from the cache:
      },
    },
  },
});
const client = new ApolloClient({
  uri: 'http://159.203.110.164:9002/graphql',
  cache
});
export default client




//