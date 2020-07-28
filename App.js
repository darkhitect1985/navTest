import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import locationsReducer from './store/reducers/locations';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  locations: locationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
