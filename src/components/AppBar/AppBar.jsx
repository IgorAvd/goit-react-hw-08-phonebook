import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/Auth/selectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const AppBarComponent = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: 'right' }}
            >
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
