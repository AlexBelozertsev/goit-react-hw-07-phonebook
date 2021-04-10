import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './phonebook-reducer';

const myMiddleWare = store => next => action => {
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleWare,
];

const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
