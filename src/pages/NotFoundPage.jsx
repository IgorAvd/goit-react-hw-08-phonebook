import { Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{ fontSize: '40px', marginTop: '100px', textAlign: 'center' }}
    >
      404
      <br />
      Page Not Found
    </Typography>
  );
};

export default NotFoundPage;
