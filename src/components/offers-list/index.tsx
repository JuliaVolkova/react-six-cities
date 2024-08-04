import OfferCard from '../offer-card';
import { Offers } from '../../types/offers.ts';
import {CardClassNamesMap, CardListClassNamesMap, Place} from '../../const.ts';

type OffersListProps = {
  offers: Offers;
  place: Place;
  className: typeof CardListClassNamesMap[keyof typeof CardListClassNamesMap];
}
const OffersList = ({offers = [], className, place }: OffersListProps) => (
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
      />
    ))}
  </div>
);

export default OffersList;
