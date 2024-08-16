import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];

  @Input() incomingPopularMoviesTitle: string = '';

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        console.log(movies);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  ngOnDestroy(): void {}
}
