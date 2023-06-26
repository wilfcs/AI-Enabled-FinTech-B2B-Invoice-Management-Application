import React from 'react'

const Search = ({ onChange, setSearchQuery }) => {
  return (
    <div>
      <input type="text" placeholder="Search Customer Order ID" onChange={onChange} className='search-box'/>
    </div>
  );
};

export default Search