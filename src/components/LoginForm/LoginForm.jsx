import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/Auth/operations';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
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
        Log In
      </Button>
    </form>
  );
};
