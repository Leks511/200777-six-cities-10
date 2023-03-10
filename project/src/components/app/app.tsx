
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {AppRoute, /*AuthorizationStatus*/} from '../../const';
// import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Page404 from '../../pages/page-404/page-404';
import Login from '../../pages/login/login';
// import Room from '../../pages/room/room';
// import PrivateRoute from '../private-route/private-route';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
  }

  html {
    margin-left: calc(100vw - 100%);
  }`;

const App = (): JSX.Element => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <Main />
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      {/* <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer}>
        <Route
          path=':id'
          element={
            <Room offers={offers} />
          }
        />
      </Route> */}
      <Route
        path={AppRoute.NotFoundScreen}
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Page404/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
