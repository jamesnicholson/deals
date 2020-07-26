import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://159.203.110.164:9002/graphql',
  cache: new InMemoryCache()
});
export default client