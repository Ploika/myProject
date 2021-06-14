import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants';
import { IGenreForm } from '../models/genreFomr';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }
  getGenre(): Observable<IGenreForm>{
    return this.httpClient.get<IGenreForm>(urls.genreList)
  }

}
