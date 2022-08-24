import { useDeferredValue, useMemo } from "react";

type ListProps = {
  term: string;
};

const List: React.FC<ListProps> = ({ term }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(term);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }

    return l;
  }, [deferredInput]);

  return <>{list}</>;
};

export default List;
