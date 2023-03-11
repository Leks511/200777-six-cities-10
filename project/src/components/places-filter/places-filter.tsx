import { useState } from 'react';
import cn from 'classnames';

const filters = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

const PlacesFilter = (): JSX.Element => {
  const [isOpenedFilter, setIsOpenedFilter] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <button
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpenedFilter(!isOpenedFilter)}
      >
        {activeFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </button>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isOpenedFilter}
      )}
      >
        {
          filters.map((variant) => (
            <li
              key={variant}
              tabIndex={0}
              className={cn(
                'places__option',
                {'places__option--active': activeFilter === variant}
              )}
              onClick={() => {
                setActiveFilter(variant);
                setIsOpenedFilter(false);
              }}
            >
              {variant}
            </li>
          )
          )
        }
      </ul>
    </form>
  );
};

export default PlacesFilter;
