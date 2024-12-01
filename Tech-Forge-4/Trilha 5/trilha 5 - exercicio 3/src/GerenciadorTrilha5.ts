abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager{
    private movies: string[] = [];

    addFavorite(item: string) {
        if(!this.movies.includes(item)){
            this.movies.push(item);
        }
    }
    getFavorites(): string[] {
        return this.movies.sort();
    }

}

class BoooksFavoriteManager extends FavoriteManager{
    private books: string[] =[];

    addFavorite(item: string) {
        this.books.unshift(item);
    }

    getFavorites(): string[] {
        return this.books;
    }
}

const movies = new MoviesFavoriteManager();
movies.addFavorite('Matrix');
movies.addFavorite('Harry Potter');
movies.addFavorite('Matrix'); // duplicado
movies.addFavorite('Mad Max');
console.log(movies.getFavorites());

const books = new BoooksFavoriteManager();
books.addFavorite('1984');
books.addFavorite('Crime e Castigo');
books.addFavorite('O Senhor dos Anéis');
books.addFavorite('Dom Quixote');
console.log(books.getFavorites());
