import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const.ts';
import { City } from '../../types/offers.ts';
import { useAppDispatch } from '../../hooks/store-hooks.ts';
import { changeCity } from '../../store/cities/cities-slice.ts';

type LocationProps = {
  city: City;
  currentCity: City;
};

const Location = memo(
  ({ city, currentCity }: LocationProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const handleCityClick = () => {
      const newCity = CITIES.find((item) => item.name === city.name);
      dispatch(changeCity({city: newCity as typeof CITIES[number]}));
    };

    return (
      <li className='locations__item' onClick= {handleCityClick}>
        <Link
          to={AppRoute.Cities}
          className={`locations__item-link tabs__item ${currentCity === city && 'tabs__item--active'}`}
        >
          <span>{city.name}</span>
        </Link>
      </li>
    );
  },
);
Location.displayName = 'Location';


type LocationsProps = {
  currentCity: City;
};

const Locations = memo(
  ({ currentCity }: LocationsProps): JSX.Element => (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((city) => (
            <Location
              key={city.name}
              city={city}
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
