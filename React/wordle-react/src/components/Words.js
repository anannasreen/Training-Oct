import React, { useEffect, useState } from "react";
import fetchData from "../fetchData";

function GenerateWords() {
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function WordleData() {
      const WordleResponse = await fetchData();
      setWord(WordleResponse);
    }
    WordleData();
  }, []);
  //   console.log(word.words);

  return (
    <div>
      {word?.words?.map((item) => {
        // console.log(item.length);
        return <div className="letter-box"></div>;
      })}
    </div>
  );
}

export default GenerateWords;
