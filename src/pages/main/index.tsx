import Sorting from '../../components/sorting';
import Locations from '../../components/locations';
import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import {Offers} from '../../types/offers.ts';
import {CardListClassNamesMap} from '../../const.ts';

type MainProps = {
  offers: Offers;
}

const Main = ({ offers }: MainProps): JSX.Element => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <Locations/>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
          <Sorting option='Popular'/>
          <OffersList offers={offers} className={CardListClassNamesMap.Main} place='Main' />
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  </main>
);
export default Main;
