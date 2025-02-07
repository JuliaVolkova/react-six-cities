import FavoritesList from '../../components/favorites-list';
import Footer from '../../components/footer';

const Favorites = (): JSX.Element => (
  <>
    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <FavoritesList favoriteOffers={[]} />
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Favorites;
