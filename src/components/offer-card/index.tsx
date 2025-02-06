import { memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import RatingStars from '../rating';
import BookmarkButton from '../bookmark-button';
import { AppRoute } from '../../const.ts';
import { CardClassNamesMap, CardImageOptions } from '../../stylesOptions.ts';
import { Place, Offer } from '../../types/offers.ts';

const PremiumBadge = memo(
  (): JSX.Element => (
    <div className='place-card__mark'>
      <span>Premium</span>
    </div>
  ),
);

PremiumBadge.displayName = 'PremiumBadge';

type OfferCardProps = Offer & {
  className: (typeof CardClassNamesMap)[keyof typeof CardClassNamesMap];
  place: Place;
  onMouseHover?: (offerId?: string) => void;
};

const OfferCard = memo(
  ({
    isPremium,
    title,
    type,
    price,
    isFavorite,
    rating,
    previewImage,
    className,
    place = 'Cities',
    id,
    onMouseHover,
  }: OfferCardProps): JSX.Element => {
    const urlToOffer = generatePath(AppRoute.Offer, { id });

    const handleMouseEnter = () => {
      if (onMouseHover) {
        onMouseHover(id);
      }
    };

    const handleMouseLeave = () => {
      if (onMouseHover) {
        onMouseHover();
      }
    };

    return (
      <article className={`${className} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isPremium && <PremiumBadge />}
        <div
          className={`${CardImageOptions[place].className} place-card__image-wrapper`}
        >
          <Link to={urlToOffer}>
            <img
              className='place-card__image'
              src={previewImage}
              width={CardImageOptions[place].width}
              height={CardImageOptions[place].height}
              alt='Place image'
            />
          </Link>
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <BookmarkButton
              isFavorite={isFavorite}
              place={place}
            />
          </div>
          <RatingStars
            rating={rating}
            place={place}
          />
          <h2 className='place-card__name'>
            <Link to={urlToOffer}>{title}</Link>
          </h2>
          <p className='place-card__type'>{type}</p>
        </div>
      </article>
    );
  },
);

OfferCard.displayName = 'OfferCard';

export default OfferCard;
