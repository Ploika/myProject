import { ActivatedRoute, Router } from '@angular/router';


import { Component, Input, OnInit } from '@angular/core';

import { IGenre } from 'src/app/models/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   }
  ngOnInit(): void {}
}
