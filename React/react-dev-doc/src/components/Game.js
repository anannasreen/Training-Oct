function Square() {
  return <button className="square"></button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
      </div>
    </>
  );
}
