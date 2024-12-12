"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getAndSetCharacters = async (page) => {
      const characters = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?page=${page}`);
      const data = await characters.json();
      console.log(data);
      setCharacters(data.results);
    }
    getAndSetCharacters(1)
  },[])
  const renderCharacters = (characters) => {
    if (!characters) {
      return null
    }
    return characters.map((character) => {
      return (
        <Card key={character.id} name={character.name} id={character.id} gender={character.gender} image={character.image} specie={character.species}/>
      )
    })
  }
  return (
    <div className={styles.page}>
      {renderCharacters(characters)}
    </div>
  );
}
