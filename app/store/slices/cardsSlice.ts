// ✅ redux/slices/cardsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { creditCards } from '../../data/uaeBanks';
import type { CreditCard } from '../../types/CreditCard';

export const fetchCards = createAsyncThunk<CreditCard[]>(
  'cards/fetchCards',
  async () => {
    // Simulate async fetch
    return new Promise<CreditCard[]>((resolve) => {
      setTimeout(() => {
        resolve(creditCards);
      }, 500);
    });
  }
);

interface CardsState {
  cards: CreditCard[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CardsState = {
  cards: [],
  status: 'idle',
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cards';
      });
  },
});

export default cardsSlice.reducer;
