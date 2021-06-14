import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-poster-preview-details',
  templateUrl: './poster-preview-details.component.html',
  styleUrls: ['./poster-preview-details.component.css']
})
export class PosterPreviewDetailsComponent implements OnInit {
  poster: IMovie
  constructor(private activatedRoute: ActivatedRoute) {
      this.poster = history.state;
   }
  ngOnInit(): void {

  }

}
