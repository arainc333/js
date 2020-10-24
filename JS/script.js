"use strict";


let z = 0,
    b = 0,
    a = '';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов', '');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель', '');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман', '');
        } else {
            alert('Произошла ошибка', '');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else  {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`, ''); 

                if (genre === null || genre === '') {
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            }); 
                
            
    }
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
