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

  // Populate movies array
  movies: string[] = [
  'Inception',
  'The Matrix',
  'Interstellar',
  'Gladiator',
  'The Dark Knight',
  'The Shawshank Redemption',
  'Pulp Fiction',
  'Forrest Gump',
  'The Godfather',
  'Spirited Away',
  'Fight Club',
  'The Lord of the Rings'
  ];


  // Create empty array for favourites
    favourites: string[] = [];

addToFavourites(movie: string) {
  // Add to favourites
  this.favourites.push(movie);

  // Given string so must find index using indexOf
  const index = this.movies.indexOf(movie);

  // If indexOf cannot find the index it returns -1
  if (index !== -1) {
    // Remove from movies list
    this.movies.splice(index, 1);
  }
}

deleteFavourite(index: number) {
  // Here we already know the index as it is given as a parameter
  const movie = this.favourites[index];

  // Add to movies list
  this.movies.push(movie);
  // Remove from favourites
  this.favourites.splice(index, 1);
}



}
