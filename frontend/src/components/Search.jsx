import React, { useEffect, useState } from 'react'

const Search = ({ onChange, setSearchQuery }) => {
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={onChange} />
    </div>
  );
};

export default Search