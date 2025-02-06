import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const.ts';
import { City } from '../../types/offers.ts';

type LocationProps = {
  city: City;
  currentCity: City;
  onCityChange: (city: City) => void;
};

const Location = memo(
  ({ city, onCityChange, currentCity }: LocationProps): JSX.Element => (
    <li className='locations__item' onClick= {() => onCityChange(city)}>
      <Link to={AppRoute.Cities}
        className={`locations__item-link tabs__item ${currentCity === city && 'tabs__item--active'}`}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  ),
);
Location.displayName = 'Location';


type LocationsProps = {
  currentCity: City;
  onCityChange: (city: City) => void;
};


const Locations = memo(
  ({ onCityChange, currentCity }: LocationsProps): JSX.Element => (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((city) => (
            <Location
              key={city.name}
              city={city}
              onCityChange={onCityChange}
              currentCity={currentCity}
            />
          ))}
        </ul>
      </section>
    </div>
  ),
);
Locations.displayName = 'Locations';

export default Locations;
