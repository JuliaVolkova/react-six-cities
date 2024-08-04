import { memo } from 'react';

type TextInputProps = {
  label: 'email' | 'password';
};

const TextInput = memo(({ label }: TextInputProps): JSX.Element => {
  const labelText = label.toUpperCase();
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{labelText}</label>
      <input
        className="login__input form__input"
        type={label}
        name={label}
        placeholder={labelText}
        required
      />
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
