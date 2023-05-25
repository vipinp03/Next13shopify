import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform your search logic here based on the searchQuery
    // For simplicity, let's assume the results are fetched from an API
    // You can replace this with your own API integration code

    // Example API call
    fetch(`https://api.example.com/search?query=${searchQuery}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-l text-xs px-4 py-2 w-34 h-10 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button
          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-r h-10"
          onClick={handleSearch}
        >
          Go
        </button>
      </div>
      {searchQuery !== ""  &&
      <div className="mt-8">
        {results.length > 0 ? (
          <ul className="list-disc pl-8">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
}
    </div>
  );
};

export default Search;
