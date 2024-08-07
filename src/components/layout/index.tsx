import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import { AppRoute } from '../../const.ts';

const MainBlockClassNamesMap: { [key: string]: string } = {
  Cities: 'page page--gray page--main',
  Offer: 'page',
  Favorites: 'page',
  Login: 'page page--gray page--login',
} as const;

const PathToPlacesMap: { [key: string]: keyof typeof MainBlockClassNamesMap } =
  {
    [AppRoute.Cities]: 'Cities',
    [AppRoute.Offer]: 'Offer',
    [AppRoute.Favorites]: 'Favorites',
    [AppRoute.Login]: 'Login',
  } as const;

const DEFAULT_PLACE = 'Cities';

const Layout = () => {
  const [currentPath, setCurrentPath] =
    useState<keyof typeof MainBlockClassNamesMap>(DEFAULT_PLACE);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(PathToPlacesMap[pathname]);
    }
  }, [currentPath, pathname]);

  return (
    <div className={MainBlockClassNamesMap[currentPath]}>
      <Header
        user={null}
        favorites={[]}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
