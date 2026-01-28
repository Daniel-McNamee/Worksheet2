import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Worksheet2');

    movies: string[] = [
    'Inception',
    'The Matrix',
    'Interstellar',
    'Gladiator',
    'The Dark Knight'
  ];

    favourites: string[] = [];

  addToFavourites(movie: string) {
  this.favourites.push(movie);
}

deleteFavourite(index: number) {
  this.favourites.splice(index, 1);
}


}
