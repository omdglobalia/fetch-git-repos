import { configureStore } from '@reduxjs/toolkit';
import { api } from './appAPI';
import repoReducer from '../slices/repoSlice';

export const store = configureStore({
  reducer: {
    repo: repoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
