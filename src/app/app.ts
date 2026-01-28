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
  movies = signal<string[]>([
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
  ]);

  // Create empty array for favourites
  favourites = signal<string[]>([]);

addToFavourites(movie: string) {
  // Add to favourites
  this.favourites.update(favs => [...favs, movie]);

    // Remove from movies list
    this.movies.update(movies =>
      movies.filter(m => m !== movie)
    );
  }


deleteFavourite(index: number) {
  // Get the movie at this index
  const movie = this.favourites()[index];

  // Add to movies list
  this.movies.update(movies => [...movies, movie]);
  // Remove from favourites
  this.favourites.update(favs =>
    favs.filter((_, i) => i !== index)
  );
}


}
