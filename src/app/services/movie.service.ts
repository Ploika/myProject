import { IMovieFromPage } from './../models/movieFromPage';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovie(index: number): Observable<IMovieFromPage>{
    return this.httpClient.get<IMovieFromPage>(`${urls.movieListByPage}${index}`)
  }
  getCurrentGenreList(index: number, numb: number): Observable<IMovieFromPage>{
    return this.httpClient.get<IMovieFromPage>(`${urls.movie}${urls.movieListByGenres}${index}${urls.listByGenresPage}${numb}`)
  }

}
