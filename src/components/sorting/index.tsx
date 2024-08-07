import { memo } from 'react';
import { OPTIONS } from '../../const.ts';

type OptionProps = {
  option: (typeof OPTIONS)[number];
};
const Option = memo(({ option }: OptionProps) => (
  <li
    className='places__option'
    tabIndex={0}
  >
    {option}
  </li>
));
Option.displayName = 'Option';

const Options = memo(() => (
  <ul className='places__options places__options--custom places__options--opened'>
    {OPTIONS.map((option) => (
      <Option
        option={option}
        key={option}
      />
    ))}
  </ul>
));
Options.displayName = 'Options';

const Sorting = memo(({ option = 'Popular' }: OptionProps) => (
  <form
    className='places__sorting'
    action='#'
    method='get'
  >
    <span className='places__sorting-caption'>Sort by</span>
    <span
      className='places__sorting-type'
      tabIndex={0}
    >
      {option}
      <svg
        className='places__sorting-arrow'
        width='7'
        height='4'
      >
        <use xlinkHref='#icon-arrow-select'></use>
      </svg>
    </span>
    <Options />
  </form>
));
Sorting.displayName = 'Sorting';

export default Sorting;
