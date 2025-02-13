import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import { AppRoute, DEFAULT_PLACE } from '../../const.ts';
import { MainBlockClassNamesMap, PathToPlacesMap } from '../../stylesOptions.ts';

const Layout = () => {
  const [currentPath, setCurrentPath] =
    useState<keyof typeof MainBlockClassNamesMap>(DEFAULT_PLACE);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(PathToPlacesMap[pathname]);
    }
  }, [currentPath, pathname]);

  const favorites = [];

  return (
    <div
      className={`${MainBlockClassNamesMap[currentPath] ?? MainBlockClassNamesMap.NotFound} ${pathname === AppRoute.Favorites && favorites.length === 0 ? 'page--favorites-empty' : ''}`}
    >
      <Header
        favorites={[]}
        place={currentPath}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
