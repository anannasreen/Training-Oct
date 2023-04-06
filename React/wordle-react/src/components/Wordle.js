import React, { useEffect, useState } from "react";
import "./Wordle.css";
import fetchData from "./../fetchData";

function CreateWordle() {
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function WordleData() {
      const WordleResponse = await fetchData();
      setWord(WordleResponse);
    }
    WordleData();
  }, []);
  console.log(word.words);

  return (
    <div className="container">
      <div className="content">
        <div className="letter-box">
          <button className="letter">A</button>
        </div>
      </div>
    </div>
  );
}

export default CreateWordle;
