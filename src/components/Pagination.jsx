import React from "react";
import styles from "./pagination.module.css";
const Pagination = ({ pages, onClick }) => {
  return (
    <div className={styles["pagination-container"]}>
      {pages.map((page) => {
        return (
          <div
            key={page}
            className={styles["page-number"]}
            onClick={() => onClick(page)}
          >
            <span>{page}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
