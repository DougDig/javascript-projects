let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
};

let legalBeagle ={
   name: 'Leory',
   species: 'Beagle',
   mass: 14,
   age: 5,
};

let wetBear = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: .0000000001,
   age: 1,
};
let crew = [superChimpOne,superChimpTwo,salamander,legalBeagle,wetBear]
for (index in crew) {
   (crew[index])['astronautID'] = Number(index)+2;
   (crew[index])['move'] = function() { return Math.round(Math.random()*10)}
}
console.log(wetBear)
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
function crewReports (animal) {
   console.log(`${animal.name} is a ${animal.species}.  They are ${animal.age} years old and weigh ${animal.mass}kg.  Their ID is ${animal.astronautID}.`)
return null;
}

function animalRace (racers) {
   let raceArray = [];
   for (index in racers) {
      let moveCount = 0;
      let steps = 0;
      let turns = 0;
      while (steps < 20) {
         steps = steps + racers[index].move()
         turns++;
      }
      raceArray.push(turns);
      racers[index]['turnsTaken']=turns;
      console.log(`${racers[index].name} is a ${racers[index].species} and finished the race in ${racers[index].turnsTaken} turns`);
   }
   return raceArray;
}
console.log(animalRace(crew));
console.log(wetBear);