import React from 'react';
import {StatusBar} from 'react-native';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {Provider} from 'react-redux';
import {store, rrfProps} from './store/rootReducer';

const App = () => {
  //fonts
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider dispatch={store.dispatch} {...rrfProps}>
        <StatusBar barStyle="dark-content" />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
