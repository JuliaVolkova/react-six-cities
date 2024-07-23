import {CITIES} from '../../const.ts';

type LocationProps = {
  city: typeof CITIES[number];
}

const Location = ({city}: LocationProps): JSX.Element => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>
);

const Locations = (): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <Location key={city} city={city}/>)}
      </ul>
    </section>
  </div>
);

export default Locations;
