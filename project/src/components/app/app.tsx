import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Page404 from '../../pages/page-404/page-404';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main offersCount={offersCount} />
          }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}>
          <Route
            path=':id'
            element={
              <Room />
            }
          />
        </Route>
        <Route path={AppRoute.NotFoundScreen} element={<Page404 />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
