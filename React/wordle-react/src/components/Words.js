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
}

export default GenerateWords;
