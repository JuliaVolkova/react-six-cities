import LoginForm from '../../components/login-form';

const Login = () => (
  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <LoginForm/>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  </main>
);

export default Login;
