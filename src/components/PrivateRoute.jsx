import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggedIn, isRefreshing } = useSelector(getUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
