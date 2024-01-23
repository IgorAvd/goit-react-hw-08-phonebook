import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <NavLink
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Log In
          </NavLink>
        </div>
      </Typography>
    </div>
  );
};
