const oneLinerJoke = require("one-liner-joke");
const cowsay = require("cowsay");

var joke = oneLinerJoke.getRandomJoke();
const randomjoke = joke.body;

console.log(cowsay.say({
    text : randomjoke,
    e : "oO",
    T : "U "
}));
console.log(joke)