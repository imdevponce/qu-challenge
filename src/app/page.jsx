"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getAndSetCharacters = async (page) => {
      const characters = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?page=${page}`
      );
      const data = await characters.json();
      setCharacters(data.results);
    };
    getAndSetCharacters(1);
  }, []);
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
    </div>
  );
}
