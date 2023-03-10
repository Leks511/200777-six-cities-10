import CityTab from '../city-tab/city-tab';

type CityTabsProps = {
  activeCityIndex: number;
  onCityTabClick: (idx: number) => void;
  cities: string[];
}

const CityTabs = ({activeCityIndex, onCityTabClick, cities}: CityTabsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city, index) => (
            <CityTab
              key={city}
              city={city}
              isActive={index === activeCityIndex}
              onCityTabClick={onCityTabClick}
              idx={index}
            />
          ))
        }
      </ul>
    </section>
  </div>
);

export default CityTabs;
