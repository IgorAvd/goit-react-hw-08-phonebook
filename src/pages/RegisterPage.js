import { Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Typography variant="h4" component="h4" sx={{ textAlign: 'center' }}>
        Registration
      </Typography>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
