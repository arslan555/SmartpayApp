import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanks } from '../../services/bankService';
import type { Bank } from '../../types/Bank';

export const fetchBanks = createAsyncThunk<Bank[]>(
  'banks/fetchBanks',
  async () => {
    const banks = await getBanks();
    return banks as Bank[];
  }
);

interface BanksState {
  banks: Bank[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BanksState = {
  banks: [],
  status: 'idle',
  error: null,
};

const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBanks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.banks = action.payload;
      })
      .addCase(fetchBanks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch banks';
      });
  },
});

export default banksSlice.reducer;
  