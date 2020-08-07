"use strict" ;// этот код работает в современном режиме

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++ ) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a !=null && b !=null && a != "" && b !="" && a.length < 50 && b.length < 50) {
         console.log("done");
         personalMovieDB.movies[a] = b;
      } else {
        i--;
        console.log("error");
      }
       
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (10 <= personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}


//let i = 0;
// do { 
//     i++;
//     let a = prompt("Один из последних просмотренных фильмов?");
//     let b = prompt("На сколько оцените его?");
//     personalMovieDB.movies[a] = b;
//} while (i < 2);

// let i = 0;
// while (i < 2) { // выводит 0, затем 1, затем 2
//   let a = prompt("Один из последних просмотренных фильмов?");
//   let b = prompt("На сколько оцените его?");
//   i++;
// }

console.log(personalMovieDB);