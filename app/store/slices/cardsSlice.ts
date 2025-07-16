// ✅ redux/slices/cardsSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreditCard } from '../../types/CreditCard';
import { creditCards } from '../../data/uaeBanks';

interface CardsState {
  cards: CreditCard[];
  loading: boolean;
  error: string | null;
}

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: null,
};

// Async thunk (mocked API simulation)
export const fetchCreditCards = createAsyncThunk('cards/fetchAll', async () => {
  await new Promise((res) => setTimeout(res, 500)); // simulate network delay
  return creditCards; // would be replaced with real API in production
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreditCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCreditCards.fulfilled, (state, action: PayloadAction<CreditCard[]>) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCreditCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load cards';
      });
  },
});

export default cardsSlice.reducer;
