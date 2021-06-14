import { environment } from "src/environments/environment";

export const urls = {
  movie: `${environment.API}/discover/movie`,
  movieListByPage: `${environment.API}/discover/movie?page=`,
  movieListByGenres: '?with_genres=',
  listByGenresPage: '&page=',
  genreList: `${environment.API}/genre/movie/list`
}
