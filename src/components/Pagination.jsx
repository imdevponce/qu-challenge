import React from "react";
import styles from "./pagination.module.css";
import Image from "next/image";
const Pagination = ({
  pages,
  onClick,
  selectedPage,
  onHandlePrev,
  onHandleNext,
}) => {
  return (
    <div className={styles["pagination-container"]}>
      {selectedPage > 1 && (
        <Image
          src="/arrow-left.svg"
          alt="Previous arrow"
          width={30}
          height={30}
          className={styles.previous}
          onClick={onHandlePrev}
        />
      )}
      {pages.map((page) => {
        return (
          <ol
            key={page}
            className={`${styles["page-number"]} ${
              selectedPage === page && styles["selected-page"]
            }`}
            onClick={() => onClick(page)}
          >
            <li>{page}</li>
          </ol>
        );
      })}
      {selectedPage < pages.length && (
        <Image
          src="/arrow-right.svg"
          alt="Next arrow"
          width={30}
          height={30}
          className={styles.next}
          onClick={onHandleNext}
        />
      )}
    </div>
  );
};

export default Pagination;
