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
  }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const charactersToRender =
      search && filteredCharacters?.length === 0 ? (
        <p>Character not found</p>
      ) : (
        renderCharacters(
          filteredCharacters?.length > 0 ? filteredCharacters : data?.results
        )
      );

    return charactersToRender;
  };
  return { renderCharactersContent };
};

export default useRenderCharacters;
