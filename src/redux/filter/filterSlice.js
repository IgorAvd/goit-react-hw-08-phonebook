import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filteredValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredValue } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

//Selector

export const getFilterValue = state => state.filter.filter;
