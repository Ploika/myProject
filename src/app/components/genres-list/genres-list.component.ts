import { MovieService } from 'src/app/services/movie.service';

import { Component, Input, OnInit } from '@angular/core';

import { IGenre } from 'src/app/models/genre';
import { IMovie } from 'src/app/models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  movies: IMovie[]
  currentGenre: number;
  page: number;
  currentPage: number;
  var: number
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.page = 1
    this.activatedRoute.params.subscribe(params =>  {
      this.currentGenre = params.id
      this.movieService.getCurrentGenreList(this.currentGenre, this.currentPage).subscribe(value => {
        this.movies = value.results
      })
    })
   }
  ngOnInit(): void {
  }
  pageChangeTo(number: number): void{
    this.currentPage = number
    this.movieService.getCurrentGenreList(this.currentGenre, this.currentPage).subscribe(value => {
      this.movies = value.results
    })

  }
}
