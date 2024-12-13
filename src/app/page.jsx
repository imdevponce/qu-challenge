"use client";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import useFetch from "@/hooks/useFetch";
import useFilterCharacters from "@/hooks/useFilterCharacters";
import usePagination from "@/hooks/usePagination";
import useRenderCharacters from "@/hooks/useRenderCharacters";

export default function Home() {
  const {
    page,
    onHandleSetPage,
    onHandlePrev,
    onHandleNext,
    allPages,
    clearSearch,
  } = usePagination(10);
  const { data, isLoading, error } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API_URL}?page=${page}`,
  });

  const { filteredCharacters, search, onHandleSearch } = useFilterCharacters({
    data,
    clearSearch,
  });

  const { renderCharactersContent } = useRenderCharacters();
  return (
    <div className={styles.page}>
      <section className={styles["characters-container"]}>
        <SearchBar
          placeholder="Search for a character"
          onChange={onHandleSearch}
          value={search}
        />
        {renderCharactersContent({
          isLoading,
          error,
          search,
          filteredCharacters,
          data,
        })}
      </section>
      <Pagination
        pages={allPages}
        onClick={onHandleSetPage}
        selectedPage={page}
        onHandlePrev={onHandlePrev}
        onHandleNext={onHandleNext}
      />
    </div>
  );
}
