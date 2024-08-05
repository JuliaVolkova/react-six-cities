import FavoritesList from '../../components/favorites-list';
import {Offers} from '../../types/offers.ts';

type FavoritesProps = {
  offers: Offers;
};

const Favorites = ({offers = []}: FavoritesProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList favoriteOffers={offers}/>
      </section>
    </div>
  </main>
);

export default Favorites;
