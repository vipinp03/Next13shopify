import React, { useState ,useEffect} from 'react';
import { getProductBysearch } from '@/lib/shopify';
import Link from 'next/link';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async() => {
    // Perform your search logic here based on the searchQuery
    // For simplicity, let's assume the results are fetched from an API
    // You can replace this with your own API integration code

    // Example API call
    await getProductBysearch(searchQuery)
    .then((res)=>{
      setResults(res.products.edges)
      console.log("data",res.products.edges)
    })
    // fetch(`https://api.example.com/search?query=${searchQuery}`)
    //   .then(response => response.json())
    //   .then(data => setResults(data.results))
    //   .catch(error => console.log(error));
  };
  useEffect(()=>{
if(searchQuery === ""){
  setResults([])
}
  },[searchQuery])

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
      {results.length > 0 &&
      <div className=" max-w-xl  bg-red-500 relative">
        {results.length > 0 ? (
          <div className=" max-w-xl bg-slate-400 h-60 rounded-sm p-2 absolute">
            {results.map((result, index) => (
              <div key={index} className='flex items-center space-x-3'>
               <Link href={`/product/${result.node.handle}`}>
               <img className='w-10 h-10 rounded-sm' src={result.node.featuredImage.originalSrc} alt={result.node.title}/>
                <h1 className=' text-xs'>{result.node.title}</h1>
               </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
}
    </div>
  );
};

export default Search;
