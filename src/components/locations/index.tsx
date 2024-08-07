import { memo } from 'react';
import { CITIES } from '../../const.ts';

type LocationProps = {
  city: (typeof CITIES)[number];
};

const Location = memo(
  ({ city }: LocationProps): JSX.Element => (
    <li className='locations__item'>
      <a
        className='locations__item-link tabs__item'
        href='#'
      >
        <span>{city}</span>
      </a>
    </li>
  )
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
  )
);
Locations.displayName = 'Locations';

export default Locations;
