import { memo } from 'react';

const Logo = memo(
  (): JSX.Element => (
    <div className='header__left'>
      <a className='header__logo-link header__logo-link--active'>
        <img
          className='header__logo'
          src='img/logo.svg'
          alt='6 cities logo'
          width='81'
          height='41'
        />
      </a>
    </div>
  )
);

Logo.displayName = 'Logo';

export default Logo;
