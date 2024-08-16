import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }
}
