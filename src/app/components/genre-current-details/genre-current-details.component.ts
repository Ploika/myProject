import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-genre-current-details',
  templateUrl: './genre-current-details.component.html',
  styleUrls: ['./genre-current-details.component.css']
})
export class GenreCurrentDetailsComponent implements OnInit {
  movie: IMovie
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.movie = history.state;
      
    })

  }
}
