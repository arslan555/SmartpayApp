import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bank } from '../../types/Bank';
import { uaeBanks } from '../../data/uaeBanks';

interface BankState {
    banks: Bank[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: BankState = {
    banks: [],
    loading: false,
    error: null,
  };
  
  export const fetchBanks = createAsyncThunk<Bank[]>(
    'banks/fetchBanks',
    async () => {
      return new Promise((resolve) => setTimeout(() => resolve(uaeBanks), 1000));
    }
  );
  
  const banksSlice = createSlice({
    name: 'banks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBanks.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBanks.fulfilled, (state, action: PayloadAction<Bank[]>) => {
          state.loading = false;
          state.banks = action.payload;
        })
        .addCase(fetchBanks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch banks';
        });
    },
  });
  
  export default banksSlice.reducer;
  