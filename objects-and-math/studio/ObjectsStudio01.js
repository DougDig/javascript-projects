// Code your selectRandomEntry function here:
function selectRandomId(inputArray) {
  return inputArray[Math.floor(Math.random()*inputArray.length)];
}

// Code your buildCrewArray function here:
function threeLongCrewArray (inputArray) {
  let outPutArray = [];
  while (outPutArray.length <3) {
    let tempId = selectRandomId(inputArray);
    if (outPutArray.includes(tempId) === false) {
      outPutArray.push(tempId)
    }
  }
  return outPutArray;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray(inputId, candidates) {
  let candidateNames = [];
  let inputIdArray = threeLongCrewArray(inputId);
  for (let index in candidates) {
    if (inputIdArray.includes(candidates[index].astronautID) === true) {
      candidateNames.push(candidates[index].name);
     }
  }
  return candidateNames;
}

// Code your template literal and console.log statements:
console.log(selectRandomId(idNumbers));
let crewOfThree = buildCrewArray(idNumbers, animals);

console.log(`${crewOfThree[0]}, ${crewOfThree[1]}, and ${crewOfThree[2]} are going to space!`)
