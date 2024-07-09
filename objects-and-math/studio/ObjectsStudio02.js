// Code your orbitCircumference function here:


function orbitCircumference(altitude = 2000) {
  return Math.round(2*Math.PI*(altitude + 6378))
}
console.log(orbitCircumference());
// Code your missionDuration function here:
function missionDuration(orbits, altitude = 2000, speed = 28000) {
  let distance = orbits * orbitCircumference(altitude);
  let time = distance/speed;
  return [Math.round(time*100)/100, distance];
}
console.log(`The mission will travel ${missionDuration(7)[1]} km around the planet and it will take ${missionDuration(7)[0]} hourse to complete`);
// Copy/paste your selectRandomEntry function here:
function selectRandomId(inputArray) {
  return inputArray[Math.floor(Math.random()*inputArray.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended (crewMember = selectRandomId(crewFull), orbits = 3) {
  let hoursDuration = missionDuration(orbits)[0];
  let o2Used = Math.round(crewMember.o2Used(hoursDuration)*1000)/1000;
  return [crewMember.name, o2Used, hoursDuration];
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateF];
 let crewFull = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
 
 oxygenOutputVar = oxygenExpended()
 console.log(`${oxygenOutputVar[0]} will perform the spacewalk, which will last ${oxygenOutputVar[2]} hours and require ${oxygenOutputVar[1]} kg of oxygen.`)

 function selectLeastOxygen(candidates) {
  let oxyUse = 999999;
  let selectedCandidate = ["goof"];
    for (let index in candidates) {
      if (candidates[index].o2Used(1)<oxyUse) {
        oxyUse = candidates[index].o2Used(1);
        selectedCandidate.splice(0,1,candidates[index]);
      }
     }
return selectedCandidate[0];
 }

 console.log(selectLeastOxygen(crew));

 