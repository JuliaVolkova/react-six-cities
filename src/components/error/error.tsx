import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

const Error = (): JSX.Element => (
  <div className='page page--favorites-empty'>
    <main className='page__main page__main--favorites page__main--favorites-empty'>
      <div className='page__favorites-container container'>
        <section className='favorites favorites--empty'>
          <h1 className='visually-hidden'>Error</h1>
          <div className='favorites__status-wrapper'>
            <b className='favorites__status'>Error</b>
            <Link to={AppRoute.Cities} className='login__submit form__submit button'>Перейти на главную</Link>
            <p className='favorites__status-description'>Oops</p>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Error;
