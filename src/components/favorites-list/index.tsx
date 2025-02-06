import { memo } from 'react';
import { Link } from 'react-router-dom';
import OffersList from '../offers-list';
import { AppRoute } from '../../const.ts';
import { CardListClassNamesMap } from '../../stylesOptions.ts';
import { Offer, Offers } from '../../types/offers.ts';

const groupOffersByCity = (offers: Offers) =>
  offers.reduce(
    (groupOffers: Record<string, Offer[]>, offer) => {
      const cityName = offer.city.name;
      if (!groupOffers[cityName]) {
        groupOffers[cityName] = [];
      }
      groupOffers[cityName].push(offer);
      return groupOffers;
    },
    {} as Record<string, Offers>
  );

type FavoritesListItemProps = {
  city: string;
  cityOffers: Offers;
};

const FavoritesListItem = memo(
  ({ city, cityOffers = [] }: FavoritesListItemProps): JSX.Element => (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link
            to={AppRoute.Cities}
            className='locations__item-link'
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <OffersList
        offers={cityOffers}
        className={CardListClassNamesMap.Favorites}
        place='Favorites'
      />
    </li>
  )
);

FavoritesListItem.displayName = 'FavoritesListItem';

type FavoritesListProps = {
  favoriteOffers: Offers;
};

const FavoritesList = memo(
  ({ favoriteOffers }: FavoritesListProps): JSX.Element => {
    const groupedOffers = groupOffersByCity(favoriteOffers);
    return (
      <ul className='favorites__list'>
        {Object.entries(groupedOffers).map(([city, cityOffers]) => (
          <FavoritesListItem
            city={city}
            key={city}
            cityOffers={cityOffers}
          />
        ))}
      </ul>
    );
  }
);

FavoritesList.displayName = 'FavoritesList';

export default FavoritesList;
