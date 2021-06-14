import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-posters-preview',
  templateUrl: './posters-preview.component.html',
  styleUrls: ['./posters-preview.component.css']
})
export class PostersPreviewComponent implements OnInit {
  moviesPoster: IMovie[]
  currentPosters: IMovie[]
  constructor(private movieService: MovieService) {
   }
   getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.getRandomInt(1, 500)).subscribe(value => {
      this.moviesPoster = value.results
      this.currentPosters = this.moviesPoster.slice(0, 8)
    })
  }
}
