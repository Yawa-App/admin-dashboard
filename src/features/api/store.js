import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from 'src/features/app/apiSlice';
import { otherApi } from '../app/otherApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['someOtherReducer'], // Add any reducers you want to persist here
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [otherApi.reducerPath]: otherApi.reducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(apiSlice.middleware, otherApi.middleware),
});

export const persistor = persistStore(store);