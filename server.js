let superheroes = require('superheroes');
console.log(superheroes.random());
superheroes.all.forEach(hero =>{
    console.log(hero);
});

let supervillains = require('supervillains');
console.log(supervillains.random());

supervillains.all.forEach(villain =>{
    console.log(villain);
});


console.log(`${superheroes.random()} fights ${supervillains.random()}`);



//console.log(superheroes.all);

/*task 
1. get the name of the supervillains
2. Get a random supervillains name
3. Make a random superhero fight  a random supervillain in the concole.log()

*/

