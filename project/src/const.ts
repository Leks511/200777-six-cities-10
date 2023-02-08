export enum AppRoute {
  Root = '/',
  NotFoundScreen = '*',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const PlacesRootComponent = {
  CITIES: 'cities',
  ROOM: 'room',
};
