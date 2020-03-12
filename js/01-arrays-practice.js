//STEP 1

// let favoriteMovies = ['Big', 'Jurassic Park', 'Moulin Rouge', 'Avengers: End Game', 'Star Trek: First Contact']

// window.console.log(favoriteMovies[1]);

//STEP 2

// let movies = new Array(5);
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';

// window.console.log(movies[0]);

//STEP 3

// let movies = new Array(5);
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';

// window.console.log(movies.length);

//STEP 4

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';

// delete movies[0];

// window.console.log(movies);

//STEP 5

// let i;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// for(i = 0; i < movies.length; i++){
//     window.console.log(movies[i]);
// };

//STEP 6

// let movie;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// for(movie in movies) {
//     window.console.log(movies[movie]);
// };

//STEP 7

// let movie;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// for(movie in movies) {
//     movies.sort();
//     window.console.log(movies[movie]);
// };

//STEP 8

// let movie;
// let leastFav;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Too Fast Too Furious';
// leastFavMovies[1] = 'The Lion King (Remake)';
// leastFavMovies[2] = 'Glitter';


// window.console.log('Movies I like:' + '\n\n');

// for(movie in movies) {
//     window.console.log(movies[movie]);
// };

// window.console.log('\n\nMovies I regret watching:\n\n');

// for(leastFav in leastFavMovies) {
//     window.console.log(leastFavMovies[leastFav]);
// };

//STEP 9

// let movie;
// let leastFav;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Too Fast Too Furious';
// leastFavMovies[1] = 'The Lion King (Remake)';
// leastFavMovies[2] = 'Glitter';

// movies = movies.concat(leastFavMovies);

// movies.sort();
// movies.reverse();

// for (movie in movies) {
//     window.console.log(movies[movie]);
// };

//STEP 10

// let movie;
// let leastFav;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Too Fast Too Furious';
// leastFavMovies[1] = 'The Lion King (Remake)';
// leastFavMovies[2] = 'Glitter';

// movies = movies.concat(leastFavMovies);

// movies.sort();
// movies.reverse();

// movies = movies.pop();
// window.console.log(movies);

//STEP 11

// let movie;
// let leastFav;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Too Fast Too Furious';
// leastFavMovies[1] = 'The Lion King (Remake)';
// leastFavMovies[2] = 'Glitter';

// movies = movies.concat(leastFavMovies);

// movies.sort();
// movies.reverse();

// window.console.log(movies.shift());

//STEP 12

// let movie;
// let leastFav;
// let i;

// i = 0;

// let movies = [];
// movies[0] = 'Big';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Moulin Rouge';
// movies[3] = 'Avengers: End Game';
// movies[4] = 'Star Trek: First Contact';
// movies[5] = 'To Wong Foo';
// movies[6] = 'Saving Private Ryan';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Too Fast Too Furious';
// leastFavMovies[1] = 'The Lion King (Remake)';
// leastFavMovies[2] = 'Glitter';

// movies = movies.concat(leastFavMovies);

// movies.sort();
// movies.reverse();

// movies.splice(0, 1, 'Forrest Gump');
// movies.splice(2, 1, 'Neverending Story');
// movies.splice(7, 1, 'Outbreak');

// for (movie in movies) {
//     window.console.log(String(i), movies[movie]);
//     i++;
// };

//STEP 13

// let employee1;
// let employee2;
// let employees;

// employee1 = [];
// employee2 = [];
// employees = [];

// employees.push(employee1);
// employees.push(employee2);

// employee1['employeeID'] = 101;
// employee1['name'] = 'Amanda Bently';
// employee1['title'] = 'Manager';
// employee1['department'] = 'Research and Development';
// employee1['employment'] = true;

// employee2['employeeID'] = 102;
// employee2['name'] = 'Charlie Davis';
// employee2['title'] = 'Assistant';
// employee2['department'] = 'Marketing';
// employee2['employment'] = true;

// window.console.log(employees[1]['name']);

//STEP 14

// let employee1;
// let employee2;
// let employees;
// let i;

// employee1 = [];
// employee2 = [];
// employees = [];

// employees.push(employee1);
// employees.push(employee2);

// employee1['employeeID'] = 101;
// employee1['name'] = 'Amanda Bently';
// employee1['title'] = 'Manager';
// employee1['department'] = 'Research and Development';
// employee1['employment'] = true;

// employee2['employeeID'] = 102;
// employee2['name'] = 'Charlie Davis';
// employee2['title'] = 'Assistant';
// employee2['department'] = 'Marketing';
// employee2['employment'] = true;

// for (i = 0; 1 < employees.length; i++){
// window.console.log(employees[i]['name']);
// };

//STEP 15

// let employee1;
// let employee2;
// let employee3;
// let employees;
// let i;

// employee1 = [];
// employee2 = [];
// employee3 = [];
// employees = [];

// employees.push(employee1);
// employees.push(employee2);
// employees.push(employee3);

// employee1['employeeID'] = 101;
// employee1['name'] = 'Amanda Bently';
// employee1['title'] = 'Manager';
// employee1['department'] = 'Research and Development';
// employee1['employment'] = true;

// employee2['employeeID'] = 102;
// employee2['name'] = 'Charlie Davis';
// employee2['title'] = 'Assistant';
// employee2['department'] = 'Marketing';
// employee2['employment'] = true;

// employee3['employeeID'] = 103;
// employee3['name'] = 'Eric Franks';
// employee3['title'] = 'Director';
// employee3['department'] = 'Finance';
// employee3['employment'] = false;

// for (i = 0; i < employees.length; i++){
//     if (employees[i]['employment']) {
//         window.console.log(employees[i]['name']);
//     } else {
//         break;
//     };
// };

//STEP 16

// let movies = [];
// let movieNames = [];
// let i;

// movies = [['Jurassic Park', 1], ['Moulin Rouge', 2], ['Avengers: End Game', 3], ['Too Wong Foo', 4], ['Star Trek: First Contact', 5]];

//     // window.console.log(movies);

// for (i = 0; i < movies.length; i++){
//     // window.console.log(movies[i][0]);

//     movieNames = movies[i].filter((movie) => {
//         return typeof movie === 'string';
//     });
//     window.console.log(movieNames);
// };

//STEP 17

// let employees;
// let i;
// employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

// showEmployee = (names) => {
//     window.console.log('Employees: \n\n');
//     for (i = 0; i < employees.length; i++) {    
//         window.console.log(names[i].toString() + '\n');
//     };
// };
// showEmployee(employees);

//STEP 18

// let values;
// let filteredValues;
// let i;

// values = [58, '', 'abcd', true, null, false, 0];

// filterValues = (value) => {
//     'use strict'
//     filteredValues = value.filter((item) => {
//         if (item) {
//             return filteredValues = item;
//         } else {
//             return;
//         }
//     });
//     window.console.log(filteredValues);
// };
// filterValues(values);

//STEP 19

// let numbers;
// let random;

// numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// randomGenerator = (numericArray) => {
//     random = parseInt(Math.random() * 10);
//     window.console.log(numericArray[random]);
// };

// randomGenerator(numbers);

//STEP 20

// let numbers;
// let largestValue;
// let i;

// numbers = [3, 16, 1002, 243, 567, 189, 999, 867];

// largestNumber = (numericArray) => {
//     largestValue = numericArray[0];
//     for (i = 0; i < numericArray.length; i++) {
//         if (largestValue >= numericArray[i]) {
//             largestValue;
//         } else if (largestValue <= numericArray[i]) {
//             largestValue = numericArray[i];
//         }
//     };
//     window.console.log(largestValue);
// };
// largestNumber(numbers);