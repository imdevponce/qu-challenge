import CharacterCard from "@/components/CharacterCard";
const useRenderCharacters = () => {
  const renderCharacters = (characters = []) =>
    characters.map(({ id, name, gender, image, species }) => (
      <CharacterCard
        key={id}
        name={name}
        id={id}
        gender={gender}
        image={image}
        specie={species}
      />
    ));

  const renderCharactersContent = ({
    isLoading,
    error,
    search,
    filteredCharacters,
    data,
    sortBy,
  }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    let characters =
      filteredCharacters?.length > 0 ? filteredCharacters : data?.results;
    if (sortBy === "name") {
      characters = [...characters].sort((a, b) => {
        return a.name?.toLowerCase().localeCompare(b.name?.toLowerCase());
      });
    }
    const charactersContent =
      search && filteredCharacters?.length === 0 ? (
        <p>Character not found</p>
      ) : (
        renderCharacters(characters)
      );

    return charactersContent;
  };
  return { renderCharactersContent };
};

export default useRenderCharacters;
