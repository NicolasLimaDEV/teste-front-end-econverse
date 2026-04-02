import "./SearchBarStyle.sass";
import SearchIcon from "../../assets/icons/MagnifyingGlass.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="O que você está buscando?"
        aria-label="Buscar produtos"
      />
      <button type="button" aria-label="Buscar">
        <img src={SearchIcon} alt="Buscar" />
      </button>
    </div>
  );
};

export default SearchBar;