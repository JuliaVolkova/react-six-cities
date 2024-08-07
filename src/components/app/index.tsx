import Main from '../../pages/main';
import { Offers } from '../../types/offers.ts';
import Header from '../header';

type AppProps = {
  offers: Offers;
};

const App = ({ offers }: AppProps) => (
  <div className='page page--gray page--main'>
    <Header
      user={null}
      favorites={[]}
    />
    <Main offers={offers} />
  </div>
);

export default App;
