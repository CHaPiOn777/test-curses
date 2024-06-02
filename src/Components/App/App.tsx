import { useMemo, useState } from "react";
import styles from "./App.module.scss";
import { useServerData } from "../../vendor/hooks/useServerData";
import Menu from "../Menu/Menu";
import Courses from "../Courses/Courses";

function App() {
  const { data, loading, error } = useServerData();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tags = useMemo(() => {
    const allTags = data?.flatMap((item) => item.tags);

    const uniqueTags = Array.from(new Set(allTags));
    return ["Все темы", ...uniqueTags];
  }, [data]);

  const newData = useMemo(
    () =>
      tags[activeIndex] === "Все темы"
        ? data
        : data?.filter((item) =>
            item.tags.some((tag) => tag === tags[activeIndex])
          ),
    [activeIndex, data]
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className={styles.Main}>
      {tags.length && (
        <Menu
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tags={tags}
        />
      )}
      <Courses data={newData} />
    </main>
  );
}

export default App;
