// Declare and assign the variables below
let nameOfShuttle = "Determination"
let speedOfShuttleMi = 17500
let marsDistanceKm = 225000000
let moonDistanceKm = 384400
let milesPerKilometer = .621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(nameOfShuttle)
console.log(typeof(nameOfShuttle))
console.log(speedOfShuttleMi)
console.log(typeof(speedOfShuttleMi))
console.log(marsDistanceKm)
console.log(typeof(marsDistanceKm))
console.log(moonDistanceKm)
console.log(typeof(moonDistanceKm));
console.log(milesPerKilometer)
console.log(typeof(milesPerKilometer))
// Calculate a space mission below
let marsDistanceMi = marsDistanceKm*milesPerKilometer
console.log(marsDistanceMi)
let marsTravelTimeHours = marsDistanceMi/speedOfShuttleMi
console.log(marsTravelTimeHours)
let marsTravelTimeDays = marsTravelTimeHours/24
console.log(marsTravelTimeDays)
// Print the results of the space mission calculations below
console.log(nameOfShuttle + " will take " + marsTravelTimeDays + " days to reach Mars")
// Calculate a trip to the moon below
console.log(nameOfShuttle + " will take " + moonDistanceKm*milesPerKilometer/speedOfShuttleMi/24 + " days to reach the Moon")
// Print the results of the trip to the moon below
let marsMissionDays = (marsTravelTimeHours-marsTravelTimeHours%24)/24
console.log(marsMissionDays)
let marsMissionHours = (marsTravelTimeHours%24)
console.log(marsMissionHours)
console.log(16-2*5/3+1)
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));
console.log(Boolean(" "));
console.log("break")
console.log(4 < 3 || 2 < 3)