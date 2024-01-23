import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredValue } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterSubmit = e => {
    const filterValue = e.target.value.trim();
    dispatch(filteredValue(filterValue));
  };

  return (
    <div>
      <TextField
        label="Find contacts by name"
        type="text"
        name="name"
        variant="outlined"
        sx={{
          width: '530px',
          display: 'flex',
          margin: '25px auto',
        }}
        onChange={handleFilterSubmit}
      />
    </div>
  );
};
