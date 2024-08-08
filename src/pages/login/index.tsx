import LoginForm from '../../components/login-form';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

const Login = () => (
  <main className='page__main page__main--login'>
    <div className='page__login-container container'>
      <LoginForm />
      <section className='locations locations--login locations--current'>
        <div className='locations__item'>
          <Link
            to={AppRoute.Cities}
            className='locations__item-link'
          >
            <span>Amsterdam</span>
          </Link>
        </div>
      </section>
    </div>
  </main>
);

export default Login;
