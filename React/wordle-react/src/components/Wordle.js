import React, { useEffect, useRef, useState } from "react";
import "./Wordle.css";
import fetchData from "./../fetchData";

function CreateWordle() {
  const [word, setWord] = useState([]);
  const listOne = useRef();

  useEffect(() => {
    async function WordleData() {
      const WordleResponse = await fetchData();
      setWord(WordleResponse);
    }
    WordleData();
  }, []);
  // console.log(word.words);

  const GenerateLetters = () => {
    let td = [];
    for (let i = 65; i <= 90; i++) {
      td.push(
        <button className="letter" key={i} ref={listOne}>
          {String.fromCharCode(i)}
        </button>
      );
    }
    return td;
  };

  return (
    <div className="container">
      <div className="content">
        <div className="letter-box">
          <GenerateLetters />
        </div>
        <div className="letter-box">
          <GenerateLetters />
        </div>
        <div className="letter-box">
          <GenerateLetters />
        </div>
        <div className="letter-box">
          <GenerateLetters />
        </div>
        <div className="letter-box">
          <GenerateLetters />
        </div>
      </div>
    </div>
  );
}

export default CreateWordle;
