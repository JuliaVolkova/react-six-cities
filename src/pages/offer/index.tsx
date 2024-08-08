import ImageGallery from '../../components/image-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferGoods from '../../components/offer-goods';
import Host from '../../components/host';
import Description from '../../components/description';
import Reviews from '../../components/reviews';
import Map from '../../components/map';
import OffersList from '../../components/offers-list';
import BookmarkButton from '../../components/bookmark-button';
import {
  images,
  features,
  goods,
  host,
  description,
  reviews,
} from '../../mocks/offer.ts';
import { CardListClassNamesMap } from '../../stylesOptions.ts';

const Offer = (): JSX.Element => (
  <main className='page__main page__main--offer'>
    <section className='offer'>
      <ImageGallery images={images} />
      <div className='offer__container container'>
        <div className='offer__wrapper'>
          <div className='offer__mark'>
            <span>Premium</span>
          </div>
          <div className='offer__name-wrapper'>
            <h1 className='offer__name'>
              Beautiful &amp; luxurious studio at great location
            </h1>
            <BookmarkButton
              isFavorite={false}
              place='Offer'
            />
          </div>
          <div className='offer__rating rating'>
            <div className='offer__stars rating__stars'>
              <span style={{ width: '80%' }}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='offer__rating-value rating__value'>4.8</span>
          </div>
          <OfferFeatures features={features} />
          <div className='offer__price'>
            <b className='offer__price-value'>&euro;120</b>
            <span className='offer__price-text'>&nbsp;night</span>
          </div>
          <div className='offer__inside'>
            <h2 className='offer__inside-title'>What&apos;s inside</h2>
            <OfferGoods goods={goods} />
          </div>
          <div className='offer__host'>
            <h2 className='offer__host-title'>Meet the host</h2>
            <Host
              avatarUrl={host.avatarUrl}
              isPro={host.isPro}
              userName={host.name}
            />
            <Description description={description} />
          </div>
          <Reviews reviews={reviews} />
        </div>
      </div>
      <Map />
    </section>
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className=' places__list'>
          <OffersList
            offers={[]}
            className={CardListClassNamesMap.Offer}
            place='Offer'
          />
        </div>
      </section>
    </div>
  </main>
);

export default Offer;
