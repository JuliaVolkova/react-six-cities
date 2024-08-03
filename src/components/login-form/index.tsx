import TextInput from '../text-input';

const LoginForm = () => (
  <section className="login">
    <h1 className="login__title">Sign in</h1>
    <form className="login__form form" action="#" method="post">
      <TextInput label='email' />
      <TextInput label='password' />
      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
    </form>
  </section>
);

export default LoginForm;
