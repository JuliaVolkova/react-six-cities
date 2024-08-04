import {memo} from 'react';
import {Offer} from '../../types/offers.ts';
import {CardClassNamesMap, CardImageOptions, Place} from '../../const.ts';

const PremiumBadge = memo((): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
));

PremiumBadge.displayName = 'PremiumBadge';


type BookmarkButtonProps = {
  isFavorite: boolean;
}
const BookmarkButton = memo(({isFavorite}: BookmarkButtonProps): JSX.Element => (
  <button className="place-card__bookmark-button button" type="button">
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">{isFavorite ? 'In bookmarks' : ' To bookmarks'}</span>
  </button>
));

BookmarkButton.displayName = 'BookmarkButton';

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
        <BookmarkButton isFavorite={isFavorite}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: (rating * 100) / 5}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type.toUpperCase()}</p>
    </div>
  </article>
));

OfferCard.displayName = 'OfferCard';

export default OfferCard;
