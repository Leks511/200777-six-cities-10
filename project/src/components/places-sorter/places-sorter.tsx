import { useState } from 'react';
import cn from 'classnames';

type PlacesSorterProps = {
  activeFilter: string;
  onFilterVariantClick: (activeFilter: string) => void;
  sortVariants: object;
}

const PlacesSorter = ({activeFilter, onFilterVariantClick, sortVariants}: PlacesSorterProps): JSX.Element => {
  const [isOpenedFilter, setIsOpenedFilter] = useState<boolean>(false);

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
          Object.values(sortVariants).map((variant) => (
            <li
              key={variant}
              tabIndex={0}
              className={cn(
                'places__option',
                {'places__option--active': activeFilter === variant}
              )}
              onClick={() => {
                onFilterVariantClick(variant);
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

export default PlacesSorter;
