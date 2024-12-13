import React from "react";
import Image from "next/image";
import styles from "./character-card.module.css";
const CharacterCard = ({ name, id, gender, image, specie }) => {
  return (
    <div className={styles["card-container"]}>
      <p>
        <b>Name</b> {name}
      </p>
      <p>
        <b>ID:</b> {id}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Specie:</b> {specie}
      </p>
      <Image src={image} alt={name} width={200} height={200} />
    </div>
  );
};

export default CharacterCard;
