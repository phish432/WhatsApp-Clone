import "./SearchInput.css";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const SearchInput = (props: Props) => {
  const { searchTerm, setSearchTerm } = props;

  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
};

export default SearchInput;
