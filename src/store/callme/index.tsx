import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PhoneState, PhoneResponse } from '../../types/phoneTypes';

// import _api 
import { _api } from "../../utils/_api";

const initialState: PhoneState = {
  phone: '',
  loading: false,
  error: null,
  success: false,
};

export const submitPhone = createAsyncThunk<
  PhoneResponse,
  string,
  { rejectValue: string }
>(
  'phone/submitPhone',
  async (phone: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://food-story.onrender.com/api/callme`, { phone });
      return response.data;
    } catch (error) {
      return rejectWithValue("Xatolik yuz berdi");
    }
  }
);


const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    clearStatus(state) {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPhone.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitPhone.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.phone = '';
      })
      .addCase(submitPhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Xatolik';
      });
  },
});

export const { setPhone, clearStatus } = phoneSlice.actions;
export default phoneSlice.reducer;