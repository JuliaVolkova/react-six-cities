import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import { selectUserInfo } from '../../store/user/user-slice.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
};

type LocationType = {
  from?: Location;
};

function PrivateRoute({
  children,
  isReverse,
}: PrivateRouteProps): JSX.Element {
  const location: Location<LocationType> =
    useLocation() as Location<LocationType>;
  const user = useAppSelector(selectUserInfo);

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
