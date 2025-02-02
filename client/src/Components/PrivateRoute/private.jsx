import { Outlet, Navigate } from 'react-router-dom';
import { checkToken } from '../../utils';
const PrivateRoute = () => {
  if (checkToken()) {
    return <Outlet />;
  } else return <Navigate to="/" />;
};
export default PrivateRoute;
