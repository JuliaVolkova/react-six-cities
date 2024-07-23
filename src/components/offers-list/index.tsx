import OfferCard from '../offer-card';
import {Offers} from '../../types/offers.ts';

type OffersListProps = {
  offers: Offers;
}
const OffersList = ({offers = []}: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
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
      />
    ))}
  </div>
);

export default OffersList;
