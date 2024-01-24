import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/Auth/operations';
import { Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        type="text"
        name="name"
        variant="outlined"
        sx={{
          width: '530px',
          display: 'flex',
          margin: '25px auto',
        }}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        sx={{
          width: '530px',
          display: 'flex',
          margin: '25px auto',
        }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        sx={{
          width: '530px',
          display: 'flex',
          margin: '25px auto',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: '170px',
          height: '40px',
          margin: '25px auto',
          display: 'flex',
        }}
      >
        Register
      </Button>
    </form>
  );
};
