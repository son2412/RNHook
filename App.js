import React from 'react';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from './src/reducers';
import rootSaga from './src/sagas';
import RootContainer from './src/Root/RootContainer.Screen';
import 'react-native-gesture-handler';
import {createLogger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};
export default App;
