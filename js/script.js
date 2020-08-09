'use strict';// этот код работает в современном режиме

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++ ) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
  
        if (a !=null && b !=null && a != '' && b !='' && a.length < 50 && b.length < 50) {
           personalMovieDB.movies[a] = b;
        } else {
          i--;
        }
         
  }
}

function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (10 <= personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++ ) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }  
}


rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDb(personalMovieDB.privat);

// let i = 0;
//  do { 
//     i++;
//     console.log(i);
// } while (i < 2);

// let di = 10;
// while (di < 12) { 
//   console.log(di);
//   di++;
// }