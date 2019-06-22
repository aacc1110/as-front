import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__)
});

export default client;
