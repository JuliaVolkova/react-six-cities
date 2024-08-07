import { memo } from 'react';
import { Place, Rating } from '../../types/offers.ts';

type RatingProps = {
  rating: Rating;
  place: Place;
};

const RatingStars = memo(
  ({ rating, place }: RatingProps): JSX.Element => (
    <div className='place-card__rating rating'>
      <div className='place-card__stars rating__stars'>
        <span style={{ width: (rating * 100) / 5 }}></span>
        <span className='visually-hidden'>Rating</span>
      </div>
      {place === 'Offer' && (
        <span className='offer__rating-value rating__value'>{rating}</span>
      )}
    </div>
  )
);

RatingStars.displayName = 'RatingStars';

export default RatingStars;
