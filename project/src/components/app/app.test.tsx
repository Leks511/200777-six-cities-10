import {render, screen} from '@testing-library/react';
import App from './app';

const OFFERS_COUNT = 5;

test('Renders app-component', () => {
  render(<App offersCount={OFFERS_COUNT}/>);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
