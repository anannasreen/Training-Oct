import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        // return <p key={index}>{line}</p>;
        return (
          <Fragment key={index}>
            {index > 0 && <hr />}
            <p>{line}</p>
          </Fragment>
        );
      })}
    </article>
  );
}

export default Poem;
