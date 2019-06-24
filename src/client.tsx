import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache({
  addTypename: true
}).restore((window as any).__APOLLO_STATE__);

const client = new ApolloClient({
  uri: '/graphql',
  cache
});

export default client;
