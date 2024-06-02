import { memo } from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({
  tag,
  active,
  setActive,
  index,
}: {
  tag: string;
  active: boolean;
  setActive: (active: number) => void;
  index: number;
}) => {
  return (
    <li
      className={`${active && styles.ListItemActive} ${styles.ListItem}`}
      onClick={() => setActive(index)}
    >
      {tag}
    </li>
  );
};
export default memo(MenuItem);
