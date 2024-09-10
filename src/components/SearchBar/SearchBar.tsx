import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBox">
        <SearchButton />
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchBar;
