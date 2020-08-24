'use strict';// этот код работает в современном режиме

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function() {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
      }
    },
    rememberMyFilms: function() {
         for (let i = 0; i < 2; i++ ) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
          
                if (a !=null && b !=null && a != '' && b !='' && a.length < 50 && b.length < 50) {
                   personalMovieDB.movies[a] = b;
                } else {
                  i--;
                }
                 
          }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
          console.log('Просмотрено довольно мало фильмов');
        } else if (10 <= personalMovieDB.count < 30) {
          console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
          console.log('Вы киноман');
        } else {
          console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
      for (let i = 1; i <= 3; i++ ) {
          let g = prompt(`Ваш любимый жанр под номером ${i}`);
          if (g !=null && g != '') {
            personalMovieDB.genres[i - 1] = g;
          } else {
            i--;
          }
        }
        personalMovieDB.genres.forEach((item, i) => {
          console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    
    showMyDb: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
      if(!personalMovieDB.privat) {
          personalMovieDB.privat = true;
      }
      else {
        personalMovieDB.privat = false;
      }
    }
};

// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDb();
// personalMovieDB.toggleVisibleMyDB();