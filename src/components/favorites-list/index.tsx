import {memo} from 'react';
import OffersList from '../offers-list';
import {CardListClassNamesMap} from '../../const.ts';
import {CityName, Offer, Offers} from '../../types/offers.ts';

const groupOffersByCity = (offers: Offers) => offers.reduce((groupOffers: Record<CityName, Offer[]>, offer) => {
  const cityName = offer.city.name;
  if (!groupOffers[cityName]) {
    groupOffers[cityName] = [];
  }
  groupOffers[cityName].push(offer);
  return groupOffers;
}, {} as Record<CityName, Offers>);

type FavoritesListItemProps = {
  city: CityName;
  cityOffers: Offers;
};

const FavoritesListItem = memo(({city, cityOffers = []}: FavoritesListItemProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <OffersList offers={cityOffers} className={CardListClassNamesMap.Favorites} place='Favorites' />
  </li>
));

FavoritesListItem.displayName = 'FavoritesListItem';

type FavoritesListProps = {
  favoriteOffers: Offers;
};

const FavoritesList = memo(({favoriteOffers}: FavoritesListProps): JSX.Element => {
  const groupedOffers = groupOffersByCity(favoriteOffers);
  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, cityOffers]) => (
        <FavoritesListItem city={city as CityName} key={city} cityOffers={cityOffers}/>
      ))}
    </ul>
  );
});

FavoritesList.displayName = 'FavoritesList';

export default FavoritesList;
