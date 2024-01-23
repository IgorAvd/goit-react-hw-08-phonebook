import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  getContactsThunk,
  removeContactsThunk,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
