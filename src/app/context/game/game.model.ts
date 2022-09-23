import { Category } from "../category/category.model";
import { Question } from "../question/question.model";


export interface Game {
  idGame: number;
  titleGame: string;
  urlImageCoverGame: string | null;
  idCategory: number;
  category: Category;
  questions: Question[];
}
