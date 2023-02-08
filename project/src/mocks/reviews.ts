import { Reviews } from '../types/review';

export const reviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Jan 25 2023 19:06:50 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'Печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только',
    date: 'Wed Jan 25 2023 19:06:50 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/2.png',
      id: 3,
      isPro: false,
      name: 'Первый человек'
    }
  },
  {
    comment: 'букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие',
    date: 'Wed Jan 25 2023 19:06:50 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/3.png',
      id: 2,
      isPro: true,
      name: 'Человек второй'
    }
  },
];
