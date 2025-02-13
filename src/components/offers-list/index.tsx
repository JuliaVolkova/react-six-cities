import { memo } from 'react';
import OfferCard from '../offer-card';
import { Offers } from '../../types/offers.ts';
import { CardClassNamesMap, CardListClassNamesMap } from '../../stylesOptions.ts';
import { Place } from '../../types/offers.ts';

type OffersListProps = {
  offers: Offers;
  place: Place;
  onMouseHover?: (offerId?: string) => void;
  className: (typeof CardListClassNamesMap)[keyof typeof CardListClassNamesMap];
};

const OffersList = memo(
  ({ offers = [], className, place, onMouseHover }: OffersListProps) => (
    <div className={`${className} places__list tabs__content`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          id={offer.id}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          type={offer.type}
          title={offer.title}
          price={offer.price}
          city={offer.city}
          location={offer.location}
          previewImage={offer.previewImage}
          rating={offer.rating}
          className={CardClassNamesMap[place]}
          place={place}
          onMouseHover={onMouseHover}
        />
      ))}
    </div>
  )
);

OffersList.displayName = 'OffersList';

export default OffersList;
