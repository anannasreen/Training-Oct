import React, { useState } from "react";
import { Data } from "../types";
import { getQuestionNumberToOptionsMap } from "./utils";

type Props = {
  data: Data;
};

export const QuestionForm = ({ data }: Props) => {
  const [alert, setAlert] = useState(false);
  const [options, setOptions] = useState<Record<number, string>>({});
  const [selectedOptions, setSelectedOptions] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setOptions({ ...options, [id + 1]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (Object.keys(options).length !== data.data.length) {
      setAlert(true);
      return;
    }

    setSelectedOptions(getQuestionNumberToOptionsMap(options));
    console.log(options);

    localStorage.setItem("selectedOptions", selectedOptions);

    setAlert(false);
  };

  return (
    <div className="p-2 w-full flex justify-center flex-col items-center">
      <form>
        {data?.data?.map((item) => (
          <div key={item.id}>
            <p className="px-4">
              {item.id + 1}. {item.question}
            </p>
            <div className="flex p-4 gap-8">
              {item.options?.map((option, idx) => (
                <label
                  className="flex gap-2 select-none cursor-pointer"
                  key={idx}
                >
                  <input
                    type="radio"
                    name={item.question}
                    id={item.question}
                    value={idx}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          {alert && (
            <span className="text-red-600 p-4">
              Please answer all the questions
            </span>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-4 p-2 bg-violet-600 text-white rounded-md w-24"
          >
            Submit
          </button>
        </div>
      </form>

      {selectedOptions.length ? <p>{selectedOptions}</p> : null}
    </div>
  );
};
