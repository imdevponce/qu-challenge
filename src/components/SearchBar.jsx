import React from 'react'
import styles from "./searchbar.module.css"

const SearchBar = ({placeholder, onChange, value}) => {
  return (
    <input className={styles["searchbar-container"]} type="text" placeholder={placeholder} onChange={onChange} value={value}/>
  )
}

export default SearchBar