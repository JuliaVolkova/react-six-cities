import { useEffect } from 'react';
import ImageGallery from '../../components/image-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferGoods from '../../components/offer-goods';
import Host from '../../components/host';
import Description from '../../components/description';
import Reviews from '../../components/reviews';
import Map from '../../components/map';
import OffersList from '../../components/offers-list';
import BookmarkButton from '../../components/bookmark-button';
import { CardListClassNamesMap } from '../../stylesOptions.ts';
import { AuthorizationStatus, DEFAULT_CITY } from '../../const.ts';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks.ts';
import { fetchNearbyOffers, fetchOfferComments, getOfferInfoByID } from '../../store/api-actions.ts';
import { selectAuthorizationStatus } from '../../store/user/user-slice.ts';
import NotFound from '../not-found';
import Loader from '../../components/loader/loader.tsx';
import {
  selectNearbyOffers,
  selectOfferComments,
  selectOfferErrorStatus,
  selectOfferInfo,
  selectOfferLoadingStatus,
} from '../../store/offer/offer-slice.ts';
import ReviewForm from '../../components/review-form/review-form.tsx';

const Offer = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOfferInfoByID(id))
        .unwrap()
        .then(() => {
          dispatch(fetchNearbyOffers(id));
          dispatch(fetchOfferComments(id));
        });
    }
  }, [id, dispatch]);

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isLoading = useAppSelector(selectOfferLoadingStatus);
  const isServerError = useAppSelector(selectOfferErrorStatus);
  const offer = useAppSelector(selectOfferInfo);
  const offerComments = useAppSelector(selectOfferComments);
  const nearbyOffers = useAppSelector(selectNearbyOffers);

  if (isLoading) {
    return <Loader />;
  }

  if (!offer) {
    return <NotFound />;
  }

  if (isServerError) {
    return (
      <main className="page__main page__main--offer">
        <h3>Произошла ошибка при загрузке данных.</h3>
      </main>
    );
  }

  const {title, type, price, images, description, bedrooms, isPremium, isFavorite, goods, maxAdults, rating, host: { name, avatarUrl, isPro} } = offer;

  const commentsToOffer = offerComments.slice()
    .sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
    .slice(0, 10);

  const nearPlaces = nearbyOffers.slice(0, 3);

  return (
    <main className='page__main page__main--offer'>
      <section className='offer'>
        <ImageGallery images={images} />
        <div className='offer__container container'>
          <div className='offer__wrapper'>
            {isPremium &&
              <div className='offer__mark'>
                <span>Premium</span>
              </div>}
            <div className='offer__name-wrapper'>
              <h1 className='offer__name'>{title}</h1>
              <BookmarkButton
                isFavorite={isFavorite}
                place='Offer'
              />
            </div>
            <div className='offer__rating rating'>
              <div className='offer__stars rating__stars'>
                <span style={{ width: '80%' }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='offer__rating-value rating__value'>{rating}</span>
            </div>
            <OfferFeatures features={[type, bedrooms, maxAdults]} />
            <div className='offer__price'>
              <b className='offer__price-value'>&euro;{price}</b>
              <span className='offer__price-text'>&nbsp;night</span>
            </div>
            <div className='offer__inside'>
              <h2 className='offer__inside-title'>What&apos;s inside</h2>
              <OfferGoods goods={goods} />
            </div>
            <div className='offer__host'>
              <h2 className='offer__host-title'>Meet the host</h2>
              <Host
                avatarUrl={avatarUrl}
                isPro={isPro}
                userName={name}
              />
              <Description description={description} />
            </div>
            <Reviews reviews={commentsToOffer} />
            {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
          </div>
        </div>
        <Map offers={nearPlaces} activeOffer={id} city={DEFAULT_CITY} place='Offer' />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className=' places__list'>
            <OffersList
              offers={nearPlaces}
              className={CardListClassNamesMap.Offer}
              place='Offer'
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Offer;
