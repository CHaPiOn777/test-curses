import { memo } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem/MenuItem";

const Menu = ({
  tags,
  activeIndex,
  setActiveIndex,
}: {
  tags: string[];
  activeIndex: number;
  setActiveIndex: (active: number) => void;
}) => {
  console.log(tags);
  return (
    <ul className={styles.List}>
      {tags?.map((tag, index) => (
        <MenuItem
          active={index === activeIndex}
          setActive={setActiveIndex}
          key={index}
          tag={tag}
          index={index}
        />
      ))}
    </ul>
  );
};

export default Menu;
