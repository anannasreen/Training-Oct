// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {/* {item} */}
          </div>
        );
      })}
    </div>
  );
};
