import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Layout from '../layout';
import PrivateRoute from '../private-route';
import { Offers } from '../../types/offers.ts';
import { AppRoute } from '../../const.ts';
import { User } from '../../types/user.ts';

type AppProps = {
  offers: Offers;
  user: User;
};

const App = ({ offers, user }: AppProps) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Cities}
          element={<Layout user={user}/>}
        >
          <Route
            index
            element={<Main offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute user={user}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                isReverse
                user={user}
              >
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
