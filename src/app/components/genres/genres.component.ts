
import { Component, OnInit } from '@angular/core';
import { IGenre } from 'src/app/models/genre';
import { GenreService } from 'src/app/services/genre.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[]
  constructor(private genreService: GenreService) {
    this.genreService.getGenre().subscribe(value => this.genres = value.genres)
  }
  ngOnInit(): void {}
}
