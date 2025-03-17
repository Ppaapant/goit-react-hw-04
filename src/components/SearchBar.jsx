import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          onChange={handleInput}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
