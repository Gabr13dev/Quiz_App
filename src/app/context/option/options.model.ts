import { Question } from "../question/question.model";

export interface Option {
  idOption: number;
  titleOption: string;
  idQuestion: number;
  question: Question;
  isCorrect: boolean;
}
