import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwFilms } from './film';

@Injectable({
  providedIn: 'root'
})
export class SwService {
  url = 'http://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<SwFilms>(this.url);
  }
}
