import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { LogoImgOptions } from '../../stylesOptions.ts';

type LogoProps = {
  place: keyof typeof LogoImgOptions;
}

const Logo = memo(
  ({ place = 'Header' }: LogoProps): JSX.Element => (
    <div className={`${place === 'Header' ? 'header__left' : ''}`}>
      <Link to={AppRoute.Cities}
        className={`${place.toLowerCase()}__logo-link ${place.toLowerCase()}__logo-link--active`}
      >
        <img
          className={LogoImgOptions[place].className}
          src='img/logo.svg'
          alt='6 cities logo'
          width={LogoImgOptions[place].width}
          height={LogoImgOptions[place].height}
        />
      </Link>
    </div>
  ),
);

Logo.displayName = 'Logo';

export default Logo;
