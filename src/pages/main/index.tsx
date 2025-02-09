import { useState, memo } from 'react';
import Sorting from '../../components/sorting';
import Locations from '../../components/locations';
import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import { City, Offers } from '../../types/offers';
import { CardListClassNamesMap } from '../../stylesOptions';
import { DEFAULT_CITY } from '../../const.ts';

type MainProps = {
  offers: Offers;
};

type PlacesFoundProps = {
  currentCity: City;
  offers: Offers;
}

const PlacesFound = memo(({ currentCity, offers }: PlacesFoundProps): JSX.Element => (
  <b className='places__found'>
    {`${offers.length} place${offers.length === 1 ? '' : 's'} to stay in ${currentCity.name}`}
  </b>
));

PlacesFound.displayName = 'PlacesFound';

const Main = ({ offers }: MainProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<string | undefined>();
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);

  const handleSelectActiveOffer = (offerId?: string) => setActiveOffer(offerId);
  const handleChangeCurrentCity = (city: City) => setCurrentCity(city);

  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <Locations onCityChange={handleChangeCurrentCity} currentCity={currentCity} />
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <PlacesFound currentCity={currentCity} offers={offers} />
            <Sorting option='Popular' />
            <OffersList
              offers={offers}
              className={CardListClassNamesMap.Cities}
              place='Cities'
              onMouseHover={handleSelectActiveOffer}
            />
          </section>
          <div className='cities__right-section'>
            <Map offers={offers} activeOffer={activeOffer} city={currentCity} place='Cities' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
