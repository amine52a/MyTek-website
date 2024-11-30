import { createContext, useState } from 'react';

// Create the context
export const SearchContext = createContext();

// Provider component to wrap your app and share the search query state
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}  {/* Pass the children props */}
    </SearchContext.Provider>
  );
};
