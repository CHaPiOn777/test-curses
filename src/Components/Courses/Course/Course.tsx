import React, { FC, memo } from "react";
import styles from "./Course.module.scss";
type TCourse = {
  name: string;
  image: string;
  bgColor: string;
};
const Course: FC<TCourse> = ({ name, image, bgColor }) => {
  return (
    <li className={styles.Item}>
      <div className={styles.Container} style={{ backgroundColor: bgColor }}>
        <img src={image} className={styles.Image} alt={name} />
      </div>
      <h1 className={styles.Title}>{name}</h1>
    </li>
  );
};

export default memo(Course);
