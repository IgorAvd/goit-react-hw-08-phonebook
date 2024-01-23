import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../redux/Auth/selectors';

const HomePage = () => {
  const user = useSelector(getUser);
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: '40px', marginTop: '100px', textAlign: 'center' }}
      >
        {IsLoggedIn ? (
          <>
            Hello, {user}! <br />
            Welcome to the Phonebook App
          </>
        ) : (
          <>
            Hello, guest! <br />
            Welcome to the Phonebook App
          </>
        )}
      </Typography>
    </div>
  );
};
export default HomePage;
