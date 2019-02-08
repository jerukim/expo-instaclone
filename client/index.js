/** @format */

import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { name as appName } from '../app.json';

class root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

registerRootComponent(root);
