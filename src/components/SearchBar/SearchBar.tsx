import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchBar.css";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const SearchBar = (props: Props) => {
  const { searchTerm, setSearchTerm } = props;

  return (
    <div className="searchBar">
      <div className="searchBox">
        <SearchButton />
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default SearchBar;
