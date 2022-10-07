import { Component, OnInit } from '@angular/core';
import { Film, SwFilms } from '../film';
import { SwService } from '../sw.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList!: Film[];

  constructor(private service: SwService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.service.getFilms().subscribe((data: SwFilms) => this.movieList = data.results);
  }
}
