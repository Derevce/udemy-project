"use strict" ;// этот код работает в современном режиме

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
do {
    i += 1;
    let lastFilmTitle = prompt("Один из последних просмотренных фильмов?");
    let lastFilmRate = prompt("На сколько оцените его?");
    personalMovieDB.movies[lastFilmTitle] = lastFilmRate;
  } while (i < 2);

console.log(personalMovieDB);