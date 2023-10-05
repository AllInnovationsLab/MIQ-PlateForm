type Question = {
  questions: Array<{
    id: number;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    answer: string;
    selectedAnswer: string;
  }>;
};
type OneQuestion = {
  id: number;
  question: string;
  selectedAnswer: string;
  option1: string;
  option2: string;
  option3: string;
  answer: string;
};
type User = {
  name: string;
  email: RegExp | string;
  password: string;
};
