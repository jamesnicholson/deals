import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        deals:offsetLimitPagination()
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