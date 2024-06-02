import styles from "./Courses.module.scss";
import { ICourse } from "../../vendor/types/types";
import Course from "./Course/Course";

const Courses = ({ data }: { data?: ICourse[] | null }) => {
  return (
    <ul className={styles.ListCourses}>
      {data?.map(({ name, image, bgColor }, index) => (
        <Course name={name} key={index} image={image} bgColor={bgColor} />
      ))}
    </ul>
  );
};

export default Courses;
