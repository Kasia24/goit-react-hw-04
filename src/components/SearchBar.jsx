import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./SearchBar.css";

/*const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a search term"); // or use a library like React Hot Toast
      return;
    }
    onSubmit(query);
  };

  return (
    <header className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images and photos"
            className="search-input"
          />
          <button type="submit" className="search-button">
            <span role="img" aria-label="search-icon">
              🔍
            </span>
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;*/

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="input-container"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          <span role="img" aria-label="search-icon">
            🔍
          </span>
        </input>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
