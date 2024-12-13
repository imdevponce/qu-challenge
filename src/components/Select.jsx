import React from "react";
import styles from "./select.module.css";
const Select = ({ options, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select className={styles["select-container"]} onChange={onChange}>
        <option value=""></option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
