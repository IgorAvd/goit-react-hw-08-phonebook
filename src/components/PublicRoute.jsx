import { useSelector } from 'react-redux';
import { getUser } from '../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector(getUser);
  return !user ? (
    children
  ) : (
    <Navigate to={location.state ? location.state : '/'} />
  );
};
