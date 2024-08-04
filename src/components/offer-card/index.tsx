import {memo} from 'react';
import RatingStars from '../rating';
import BookmarkButton from '../bookmark-button';
import {CardClassNamesMap, CardImageOptions} from '../../const.ts';
import { Place, Offer } from '../../types/offers.ts';

const PremiumBadge = memo((): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
));

PremiumBadge.displayName = 'PremiumBadge';

type OfferCardProps = Offer & {
  className: typeof CardClassNamesMap[keyof typeof CardClassNamesMap];
  place: Place;
};

const OfferCard = memo(({
  isPremium,
  title,
  type,
  price,
  isFavorite,
  rating,
  previewImage,
  className,
  place = 'Main'
}: OfferCardProps): JSX.Element => (
  <article className={`${className} place-card`}>
    {isPremium && <PremiumBadge/>}
    <div className={`${CardImageOptions[place].className} place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image" src={previewImage} width={CardImageOptions[place].width}
          height={CardImageOptions[place].height} alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkButton isFavorite={isFavorite} place={place} />
      </div>
      <RatingStars rating={rating} place={place} />
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
));

OfferCard.displayName = 'OfferCard';

export default OfferCard;
