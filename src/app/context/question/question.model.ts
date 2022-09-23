import { Option } from "../option/options.model";

export interface Question {
  idQuestion: number;
  titleQuestion: string;
  options: Option[];
}
