import React, { FC, FormEvent, useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

function SearchBarComponentComponent({ onSearch }:SearchFormProps) {

  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <div className="mt-5 flex flex-row items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input
            className="py-2.5 px-4 w-2/5 text-base outline-none rounded-l-lg"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter an ingredient"
          />
          <button
            className="py-2.5 px-5 w-1/10 text-base text-white font-semibold bg-gray-500 rounded-r-lg transition duration-300 ease-in-out hover:bg-gray-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBarComponentComponent;
