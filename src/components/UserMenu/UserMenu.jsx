import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/Auth/selectors';
import { logOutThunk } from '../../redux/Auth/operations';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Hello, {user}</p>
      <Button
        color="inherit"
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </div>
  );
};
