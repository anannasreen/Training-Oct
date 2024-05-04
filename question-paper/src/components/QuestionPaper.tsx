import React, { useEffect, useState } from "react";
import { QuestionForm } from "./QuestionForm";
import fetchData from "../fetchData";
import { Data } from "../types";

const fetchUrl = "./data.json";

export const QuestionPaper = () => {
  const [questionPaperData, setQuestionPaperData] = useState<Data | []>([]);

  useEffect(() => {
    async function data() {
      const dataResponse = await fetchData(fetchUrl);

      if (dataResponse.data.length % 7 === 0) {
        dataResponse.data.forEach((item: any, idx: number) => {
          item.id = idx;
        });

        setQuestionPaperData(dataResponse);
      }
    }

    data();
  }, []);

  return (
    <div className="bg-violet-100">
      <div className="max-w-[1000px] mx-auto bg-white">
        <h1 className="flex w-full font-bold text-4xl justify-center p-4 py-12">
          Preference Questionnaire
        </h1>
        <QuestionForm data={questionPaperData as Data} />
      </div>
    </div>
  );
};
