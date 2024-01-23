import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </NavLink>

          <NavLink
            to="/contacts"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Contacts
          </NavLink>
        </div>
      </Typography>
    </nav>
  );
};
