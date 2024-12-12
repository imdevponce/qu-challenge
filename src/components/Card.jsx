import React from 'react'
import Image from 'next/image'
import styles from "./card.module.css"
const Card = ({name, id, gender, image, specie }) => {
  return (
    <div className={styles["card-container"]}>
        <b>Name {name}</b>
        <p>ID: {id}</p>
        <p>Gender: {gender}</p>
        <p>Specie: {specie}</p>
        <Image src={image} alt={name} width={200} height={200} />
    </div>
  )
}

export default Card