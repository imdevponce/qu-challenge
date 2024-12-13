import { useState } from "react";

const usePagination = (totalPages) => {
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [page, setPage] = useState(1);

  const onHandleSetPage = (page) => {
    setPage(page);
  };
  const onHandlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onHandleNext = () => {
    if (page < allPages.length) {
      setPage(page + 1);
    }
  };
  return {
    page,
    onHandleSetPage,
    onHandlePrev,
    onHandleNext,
    allPages,
  };
};

export default usePagination;
