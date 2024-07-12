import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { findCities } from '../apicalls/City';

const Search = ({ onSearchChange }) => {
  const [searchCity, setSearchCity] = useState(null);

  const loadOptions = async (inputCity) => {
    const citiesList = await findCities(inputCity);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`
        };
      }),
    };
  };

  const onChangeHandler = (city) => {
    setSearchCity(city);
    onSearchChange(city);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchCity}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
