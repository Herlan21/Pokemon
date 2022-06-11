// import Reducers from './reducers';
// import {createStore} from 'redux'

//   export const Store = createStore(Reducers)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import Reducers from './reducers';
import thunk from 'redux-thunk';


const reducers = {
    appData: Reducers
  }
  
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['appData'],
  }

  const configPersist = persistReducer(persistConfig, combineReducers(reducers))
  
  // const AllReducers = combineReducers(reducers);
  
  export const store = createStore(configPersist, applyMiddleware(thunk, logger));
  export const Persistor = persistStore(store) 