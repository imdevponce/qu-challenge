"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import useFetch from "@/hooks/useFetch";
const mockPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API_URL}?page=${page}`,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const characters =
    filteredCharacters.length > 0 ? filteredCharacters : data.results;
  const renderCharacters = (characters) => {
    if (!characters) {
      return null;
    }
    return characters.map((character) => {
      return (
        <Card
          key={character.id}
          name={character.name}
          id={character.id}
          gender={character.gender}
          image={character.image}
          specie={character.species}
        />
      );
    });
  };
  const onHandleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const filteredCharacters = characters.filter((character) => {
      if (character.name.toLowerCase().includes(search.toLowerCase())) {
        console.log(character.name);
        console.log(search);
      }
      return character.name.toLowerCase().includes(search.toLowerCase());
    });
    if (filteredCharacters.length > 0) {
      setFilteredCharacters(filteredCharacters);
    } else {
      setFilteredCharacters([]);
    }
  };
  const onHandleSetPage = (page) => {
    setPage(page);
  };
  const onHandlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onHandleNext = () => {
    if (page < mockPages.length) {
      setPage(page + 1);
    }
  };
  return (
    <div className={styles.page}>
      <SearchBar
        placeholder="Search for a character"
        onChange={onHandleSearch}
        value={search}
      />
      {filteredCharacters.length === 0 && search ? (
        <p>Character not found</p>
      ) : (
        renderCharacters(
          filteredCharacters.length > 0 ? filteredCharacters : characters
        )
      )}
      <Pagination
        pages={mockPages}
        onClick={onHandleSetPage}
        selectedPage={page}
        onHandlePrev={onHandlePrev}
        onHandleNext={onHandleNext}
      />
    </div>
  );
}
