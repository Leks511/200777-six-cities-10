import cn from 'classnames';

type CityTabProps = {
  city: string;
  isActive: boolean;
  onCityTabClick: (idx: number) => void;
  idx: number;
}

const CityTab = ({city, isActive, onCityTabClick, idx}: CityTabProps): JSX.Element => (
  <li className="locations__item">
    <a className={cn(
      'locations__item-link',
      'tabs__item',
      {'tabs__item--active': isActive}
    )}
    href="#todo"
    onClick={(evt) => {
      evt.preventDefault();
      onCityTabClick(idx);
    }}
    >
      <span>{city}</span>
    </a>
  </li>
);

export default CityTab;
