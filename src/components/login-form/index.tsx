import { memo } from 'react';
import TextInput from '../text-input';

const LoginForm = memo(() => (
  <section className='login'>
    <h1 className='login__title'>Sign in</h1>
    <form
      className='login__form form'
      action='#'
      method='post'
    >
      <TextInput label='email' />
      <TextInput label='password' />
      <button
        className='login__submit form__submit button'
        type='submit'
      >
        Sign in
      </button>
    </form>
  </section>
));

LoginForm.displayName = 'LoginForm';

export default LoginForm;
