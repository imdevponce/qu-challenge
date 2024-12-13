import { useState, useMemo } from "react";

const useFilterCharacters = ({ data }) => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const onHandleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const filteredCharacters = data?.results.filter((character) => {
      return character?.name?.toLowerCase()?.includes(search?.toLowerCase());
    });

    if (filteredCharacters.length > 0) {
      setFilteredCharacters(filteredCharacters);
    } else {
      setFilteredCharacters([]);
    }
  };
  return { filteredCharacters, search, onHandleSearch };
};

export default useFilterCharacters;
