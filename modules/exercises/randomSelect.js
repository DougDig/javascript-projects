function randomFromArray(arr) {
return arr[(Math.floor(Math.random()*arr.length))]
}
//let dogs = ['puppy','guppy','yuppy'];
//console.log(randomFromArray(dogs));
//TODO: Export the randomFromArray function.
module.exports =  randomFromArray;