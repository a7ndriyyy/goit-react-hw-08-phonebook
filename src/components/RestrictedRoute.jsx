import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from './redux/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(getUser);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
