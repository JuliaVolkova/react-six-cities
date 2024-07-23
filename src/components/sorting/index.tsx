import {OPTIONS} from '../../const.ts';

type OptionProps = {
  option: typeof OPTIONS[number];
}
const Option = ({option}: OptionProps) => (<li className="places__option" tabIndex={0}>{option}</li>);

const Options = () => (
  <ul className="places__options places__options--custom places__options--opened">
    {OPTIONS.map((option) => <Option option={option} key={option}/>)}
  </ul>
);

const Sorting = ({option = 'Popular'}: OptionProps) => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      {option}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <Options/>
  </form>
);
export default Sorting;
