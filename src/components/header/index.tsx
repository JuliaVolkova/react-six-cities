import { memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { User } from '../../types/user.ts';
import { AppRoute } from '../../const.ts';
import { MainBlockClassNamesMap } from '../../stylesOptions.ts';

type HeaderProps = {
  user: User | null;
  favorites: [];
  place: keyof typeof MainBlockClassNamesMap;
};

const Header = memo(
  ({ user, favorites = [], place }: HeaderProps): JSX.Element => (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo place='Header' />
          {user && place !== 'Login' && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <Link
                    to={AppRoute.Favorites}
                    className='header__nav-link header__nav-link--profile'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      {user?.email ?? ''}
                    </span>
                    <span className='header__favorite-count'>
                      {favorites.length}
                    </span>
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link
                    to={AppRoute.Cities}
                    className='header__nav-link'
                  >
                    <span className='header__signout'>Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
);

Header.displayName = 'Header';

export default Header;
