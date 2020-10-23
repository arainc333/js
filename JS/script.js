"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let z = 0,
    b = 0,
    a = '';

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов', '');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель', '');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман', '');
    } else {
        alert('Произошла ошибка', '');
    }
}


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.private);


// function writeYourGenres() {
//     let a = prompt('Ваш любимый жанр под номером 1', ''),
//         b = prompt('Ваш любимый жанр под номером 2', ''),
//         c = prompt('Ваш любимый жанр под номером 3', '');
//         personalMovieDB.genres[0] = a;
//         personalMovieDB.genres[1] = b;
//         personalMovieDB.genres[2] = c;
    
// }


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); //Можно не использовать промежуточную переменную, а сразу записывать данные введенные пользоватем в массив.
    }
}

writeYourGenres();

// detectPersonalLevel();
