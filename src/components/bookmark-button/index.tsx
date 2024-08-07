import { memo } from 'react';
import { BookmarkButtonOptions } from '../../const.ts';
import { Place } from '../../types/offers.ts';

type BookmarkButtonProps = {
  isFavorite: boolean;
  place: Place;
};
const BookmarkButton = memo(
  ({ isFavorite, place }: BookmarkButtonProps): JSX.Element => (
    <button
      className={`${BookmarkButtonOptions[place].className} button`}
      type='button'
    >
      <svg
        className='place-card__bookmark-icon'
        width={BookmarkButtonOptions[place].width}
        height={BookmarkButtonOptions[place].height}
      >
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>
        {isFavorite ? 'In bookmarks' : ' To bookmarks'}
      </span>
    </button>
  )
);

BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
