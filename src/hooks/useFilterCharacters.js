import { useState, useEffect } from "react";

const useFilterCharacters = ({ data, page }) => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setFilteredCharacters([]);
    setSearch("");
  }, [page]);
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
