import React, { FC, useState } from 'react';
import { MealAPIResponse } from '../index';
import SearchForm from './SearchForm';
import MealList from './MealList';

const ApiFetchComponent: FC = () => {
  const [data, setData] = useState<MealAPIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchMealData = async (query: string) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data: MealAPIResponse = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <SearchForm onSearch={fetchMealData} />

      {error && <div>Error: {error}</div>}

      {data && <MealList meals={data.meals} />}
    </div>
  );
};

export default ApiFetchComponent;
