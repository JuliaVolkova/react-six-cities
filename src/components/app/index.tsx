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

type AppProps = {
  offers: Offers;
};

const App = ({ offers }: AppProps) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Cities}
          element={<Layout />}
        >
          <Route
            index
            element={<Main offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute user={null}>
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
                user={null}
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
