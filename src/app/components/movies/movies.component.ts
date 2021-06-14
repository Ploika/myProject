import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[]
  public page: number
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.page = 1
    this.loadPage()
  }

  ngOnInit(): void {}

  pageChange(number: number): void{
    this.loadPage()
  }
  private loadPage(){
    this.movieService.getMovie(this.page).subscribe(value => {
      this.movies = value.results
    })
  }
}
