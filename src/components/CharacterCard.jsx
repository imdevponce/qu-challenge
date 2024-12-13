import React from "react";
import Image from "next/image";
import styles from "./character-card.module.css";
const CharacterCard = ({ name, id, gender, image, specie }) => {
  return (
    <div className={styles["card-container"]}>
      <p>
        <strong>Name</strong> {name}
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Specie:</strong> {specie}
      </p>
      <Image src={image} alt={name} width={200} height={200} />
    </div>
  );
};

export default CharacterCard;
