// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){


//  Buttons
const takeOffButton = document.getElementById('takeoff');
const landButton = document.getElementById('landing');
const abortButton = document.getElementById('missionAbort');
const upButton = document.getElementById('up')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const downButton = document.getElementById('down')


//  Areas
const flightStatus = document.getElementById('flightStatus');
const shuttleBackground = document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener('click', function(){
        let shouldTakeOff = confirm('Confirm that the shuttle is ready for takeoff.');
            if (shouldTakeOff) {
                flightStatus.innerHTML = "Shuttle in flight.";
                shuttleBackground.style.backgroundColor = 'blue';
                spaceShuttleHeight.innerHTML = '10000';
                }
            })
    landButton.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged');
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
    })
    abortButton.addEventListener('click', function(){
        if (confirm('Confirm that you want to abor the mission.')) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }

    })
    upButton.addEventListener('click', function(){
        
    })
})