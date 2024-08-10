import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { User } from '../../types/user.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  user: User | null;
  isReverse?: boolean;
};

type LocationType = {
  from?: Location;
};

function PrivateRoute({
  children,
  isReverse,
  user = null,
}: PrivateRouteProps): JSX.Element {
  const location: Location<LocationType> =
    useLocation() as Location<LocationType>;

  if (user && isReverse) {
    const from = location.state?.from || { pathname: AppRoute.Cities };
    return <Navigate to={from} />;
  }
  if (!user && !isReverse) {
    return (
      <Navigate
        state={{ from: location }}
        to={AppRoute.Login}
      />
    );
  }

  return children;
}

export default PrivateRoute;
