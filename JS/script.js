"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let z = 0,
    b = 0,
    a = '';

do {
    z++,
    a = prompt('Назовите один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его', '');


    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        z--;
    }
} while (z < 2);

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов', '');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель', '');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман', '');
} else {
    alert('Произошла ошибка', '');
}