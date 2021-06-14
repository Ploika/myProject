import { IMovie } from "./movie";

export interface IMovieFromPage {
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
