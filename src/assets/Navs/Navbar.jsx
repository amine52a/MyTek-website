import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useContext } from 'react';
import { SearchContext } from './Searchcontext'; // Import SearchContext

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext); // Use context

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };


  return (
    <>
      <div className="navbar">
        <div className="search">
          <input
            type="text"
            placeholder="Search product here"
            value={searchQuery} // Bind the search query to the input field
            onChange={handleSearchChange} // Update search query on change
          />
        </div>
        <div className="right">
          <Link to="/profile">
            <i className="fas fa-user"></i>
          </Link>


        
          <Link to="/">
            <i className="fas fa-home"></i> {/* Home Icon */}
          </Link>
        </div>
      </div>


    </>
  );
}
