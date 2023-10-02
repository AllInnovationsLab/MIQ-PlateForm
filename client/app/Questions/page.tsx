"use client";
import { ChangeEvent, useState } from "react";
import { gql } from "@apollo/client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query {
    questions {
      question
      option1
      option2
      option3
      id
      answer
    }
  }
`;
const red = { backgroundColor: "red" };
const green = { backgroundColor: "green" };
const white = { backgroundColor: "white" };
export default function questionsList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useSuspenseQuery<Question>(query);
  const [questionsState, setQuestionsState] = useState<OneQuestion[]>(
    data.questions
  );
  const [changeBackground, setChangeBackground] = useState<boolean>(false);
  const handleOption: (
    e: ChangeEvent<HTMLInputElement>,
    question: OneQuestion
  ) => void = (e: ChangeEvent<HTMLInputElement>, question: OneQuestion) =>
    setQuestionsState((prev) => {
      return prev.map((ques) => {
        return ques.id === question.id
          ? { ...ques, selectedAnswer: e.target.value }
          : ques;
      });
    });
  const handleSubmitAnswers: () => void = () => {
    setChangeBackground(true);
  };
  console.log(questionsState);
  return (
    <div>
      <h1></h1>
      {questionsState.map((question) => (
        <form
          key={question.id}
          style={{ border: "solid black" }}
          className="m-2 p-2"
        >
          <h2 className="">{question.question}</h2>
          <ul>
            <li
              style={
                changeBackground
                  ? question.selectedAnswer === question.option1
                    ? question.option1 === question.answer
                      ? green
                      : red
                    : white
                  : white
              }
            >
              <input
                type="radio"
                id="html"
                name="fav_language"
                value={question.option1}
                onChange={(e) => handleOption(e, question)}
              />
               <label htmlFor="html">{question.option1}</label>
            </li>
            <li
              style={
                changeBackground
                  ? question.selectedAnswer === question.option2
                    ? question.option2 === question.answer
                      ? green
                      : red
                    : white
                  : white
              }
            >
              <input
                type="radio"
                id="html"
                name="fav_language"
                value={question.option2}
                onChange={(e) => handleOption(e, question)}
              />
               <label htmlFor="html">{question.option2}</label>
            </li>
            <li
              style={
                changeBackground
                  ? question.selectedAnswer === question.option3
                    ? question.option3 === question.answer
                      ? green
                      : red
                    : white
                  : white
              }
            >
              <input
                type="radio"
                id="html"
                name="fav_language"
                value={question.option3}
                onChange={(e) => handleOption(e, question)}
              />
               <label htmlFor="html">{question.option3}</label>
            </li>
          </ul>
        </form>
      ))}
      <button onClick={handleSubmitAnswers}>submit answers</button>
    </div>
  );
}
