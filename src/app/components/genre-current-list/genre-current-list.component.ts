import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-genre-current-list',
  templateUrl: './genre-current-list.component.html',
  styleUrls: ['./genre-current-list.component.css']
})
export class GenreCurrentListComponent implements OnInit {
  @Input()
  movie: IMovie
  constructor() { }

  ngOnInit(): void {
  }

}
