// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  overview() {
    console.log(`${this.title}, ${this.genre} film directed by ${this.director}
    was released in ${this.releaseYea}. It receive a rating of ${this.rating}`);
  }
}

const movie1 = new Movie("Inception", "Christopher Nolan", "Sci-Fi", 2010, 8.8);
const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", "Drama", 1994, 9.3);
const movie3 = new Movie("Jurassic Park", "Steven Spielberg", "Adventure", 1993, 8.1);

// console.log(movie1);
movie1.overview();