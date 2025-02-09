import FavoritesList from '../../components/favorites-list';
import Footer from '../../components/footer';
import NoSavedFavorites from '../../components/no-saved-favorites/no-saved-favorites.tsx';

const Favorites = (): JSX.Element => {
  const favorites = [];
  return (
    <>
      {favorites.length ?
        <main className='page__main page__main--favorites'>
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <FavoritesList favoriteOffers={[]} />
            </section>
          </div>
        </main>
        : <NoSavedFavorites />}
      <Footer />
    </>
  );
};

export default Favorites;
