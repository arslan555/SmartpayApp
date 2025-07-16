import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import banksReducer from './slices/banksSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    banks: banksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

