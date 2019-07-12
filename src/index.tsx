import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import client from './client';
import Store from './context/Store';

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('root')
    );
  });
} else {
  ReactDOM.render(
    <ApolloHooksProvider client={client}>
      <Store>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Store>
    </ApolloHooksProvider>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
