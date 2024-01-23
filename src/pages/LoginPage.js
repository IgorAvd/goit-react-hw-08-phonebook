import { Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Typography variant="h4" component="h4" sx={{ textAlign: 'center' }}>
        Login
      </Typography>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
