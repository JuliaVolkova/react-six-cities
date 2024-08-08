import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import { DEFAULT_PLACE } from '../../const.ts';
import { MainBlockClassNamesMap, PathToPlacesMap } from '../../stylesOptions.ts';
import { User } from '../../types/user.ts';

type LayoutProps = {
  user: User;
}

const Layout = ({ user }: LayoutProps) => {
  const [currentPath, setCurrentPath] =
    useState<keyof typeof MainBlockClassNamesMap>(DEFAULT_PLACE);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(PathToPlacesMap[pathname]);
    }
  }, [currentPath, pathname]);

  return (
    <div className={MainBlockClassNamesMap[currentPath] ?? MainBlockClassNamesMap.NotFound}>
      <Header
        user={user}
        favorites={[]}
        place={currentPath}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
