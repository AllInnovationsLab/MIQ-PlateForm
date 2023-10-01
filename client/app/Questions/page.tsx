"use client";

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
    }
  }
`;

export default function questionsList() {
  const { data } = useSuspenseQuery<Question>(query);

  return (
    <div>
      {data.questions.map((question) => (
        <div
          key={question.id}
          style={{ border: "solid black" }}
          className="m-2 p-2"
        >
          <h2 className="">{question.question}</h2>
          <ul>
            <li>
              <input type="radio" />
              {question.option1}
            </li>
            <li>
              {" "}
              <input type="radio" />
              {question.option2}
            </li>
            <li>
              {" "}
              <input type="radio" />
              {question.option3}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
