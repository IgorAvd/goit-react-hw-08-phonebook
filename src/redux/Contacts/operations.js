import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContactsThunk = createAsyncThunk(
  'contacts/removeContacts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${credentials}`);
      thunkAPI.dispatch(getContactsThunk());

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
