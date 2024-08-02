import {OfferReview, OfferReviews} from '../../types/reviews.ts';

type ReviewProps = {
  review: OfferReview;
};

const Review = ({review}: ReviewProps) => {
  const {user: {name, avatarUrl}, comment, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

const ReviewList = ({reviews}: ReviewsProps): JSX.Element => (
  <ul className="reviews__list">{reviews.map((review) =>
    <Review review={review} key={review.id}/>)}
  </ul>
);

type ReviewsProps = {
  reviews: OfferReviews;
}

const Reviews = ({reviews = []}: ReviewsProps): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ReviewList reviews={reviews}/>
  </section>
);

export default Reviews;


