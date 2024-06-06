import React from "react"
import { useState } from "react";
import { useGlobalContext } from "./Context";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

// api key = 87Eafq3AEJBjD6WewsJMGUxPQDzru7FYXAPjCDWfrsE
//url = https://api.unsplash.com/search/photos?client_id=87Eafq3AEJBjD6WewsJMGUxPQDzru7FYXAPjCDWfrsE&query=cat
const SearchForm = () => {
  // const [searchValue, setSearchValue] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const searchValue = e.target.value;
  //   if(!searchValue){
  //     return;
  //   } 
  //   console.log(searchValue);
  //   setSearchValue('');
  // }

  const queryClient = useQueryClient();
  const {setSearchTerm, searchTerm, isDarkTheme} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) {
      return;
    }
    console.log(searchValue);
    setSearchTerm(searchValue);
  }

  return (
    <section className="search-form">
      <h2 className="search-form-heading">Unsplash Images</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className={isDarkTheme ? "light-input-search": "dark-input-search"} placeholder="cat" name="search"></input>
        {/* onChange={(e) => setSearchValue(e.target.value)} */}
        <button className={isDarkTheme ? "light-input-button": "dark-input-button"} type="submit">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm