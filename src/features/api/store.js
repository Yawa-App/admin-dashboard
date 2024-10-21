import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from 'src/features/app/apiSlice';
import { otherApi } from '../app/otherApi';
import authReducer from '../slide/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Ensure 'auth' is included if you want to persist the auth state
};

// Properly combine reducers before passing them to persistReducer
const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [otherApi.reducerPath]: otherApi.reducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use the persistedReducer as the root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(apiSlice.middleware, otherApi.middleware),
});

export const persistor = persistStore(store);
