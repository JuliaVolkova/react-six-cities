import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const.ts';

type LocationProps = {
  city: (typeof CITIES)[number];
};

const Location = memo(
  ({ city }: LocationProps): JSX.Element => (
    <li className='locations__item'>
      <Link to={AppRoute.Cities}
        className='locations__item-link tabs__item'
      >
        <span>{city}</span>
      </Link>
    </li>
  ),
);
Location.displayName = 'Location';

const Locations = memo(
  (): JSX.Element => (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((city) => (
            <Location
              key={city}
              city={city}
            />
          ))}
        </ul>
      </section>
    </div>
  ),
);
Locations.displayName = 'Locations';

export default Locations;
