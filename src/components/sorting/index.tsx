import { memo, useState } from 'react';
import { OPTIONS } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks.ts';
import { changeSort, selectCurrentSortOption } from '../../store/offers/offers-slice.ts';

type OptionProps = {
  option: (typeof OPTIONS)[number];
};

type SortOptionsProps = {
  isOpenForm: boolean;
}

const Option = memo(({ option }: OptionProps) => {
  const currentSortOption = useAppSelector(selectCurrentSortOption);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    dispatch(changeSort({ option }));
  };

  return (
    <li
      className={`places__option ${currentSortOption === option ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleSortClick}
    >
      {option}
    </li>
  );
});

Option.displayName = 'Option';

const Options = memo(({ isOpenForm }: SortOptionsProps) => (
  <ul className={`places__options places__options--custom ${isOpenForm && 'places__options--opened'}`}>
    {OPTIONS.map((option) => (
      <Option
        option={option}
        key={option}
      />
    ))}
  </ul>
));
Options.displayName = 'Options';

const Sorting = memo(() => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const currentSortOption = useAppSelector(selectCurrentSortOption);

  const handleFormClick = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <form
      className='places__sorting'
      action='#'
      method='get'
      onClick={handleFormClick}
    >
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
      >
        &nbsp;
        {currentSortOption}
        <svg
          className='places__sorting-arrow'
          width='7'
          height='4'
        >
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <Options isOpenForm={isOpenForm} />
    </form>
  );
});
Sorting.displayName = 'Sorting';

export default Sorting;
