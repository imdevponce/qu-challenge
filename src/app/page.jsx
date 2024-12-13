"use client";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import Select from "@/components/Select";
import useFetch from "@/hooks/useFetch";
import useFilterCharacters from "@/hooks/useFilterCharacters";
import usePagination from "@/hooks/usePagination";
import useRenderCharacters from "@/hooks/useRenderCharacters";
import { useState } from "react";
export default function Home() {
  const [sortBy, setSortBy] = useState("");
  const { page, onHandleSetPage, onHandlePrev, onHandleNext, allPages } =
    usePagination(10);
  const { data, isLoading, error } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API_URL}?page=${page}`,
  });

  const { filteredCharacters, search, onHandleSearch } = useFilterCharacters({
    data,
    page,
  });

  const { renderCharactersContent } = useRenderCharacters();
  const onHandleChangeSelect = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div className={styles.page}>
      <section className={styles["characters-container"]}>
        <SearchBar
          placeholder="Search for a character"
          onChange={onHandleSearch}
          value={search}
        />
        <Select
          options={["name"]}
          label="Sort by:"
          onChange={onHandleChangeSelect}
        />
        {renderCharactersContent({
          isLoading,
          error,
          search,
          filteredCharacters,
          data,
          sortBy,
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
