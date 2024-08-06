function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', function(){
        paragraph.innerHTML = 'Houston we have liftoff!'
    })

    missionAbort.addEventListener('mouseover', function(){
        missionAbort.style.backgroundColor = 'red';
    })

    missionAbort.addEventListener('mouseout', function(){
        missionAbort.style.backgroundColor = "";
    })
    // Put your code for the exercises here.
    missionAbort.addEventListener('click', function(){
        if (confirm('Do you want to abort?')){
            paragraph.innerHTML = 'Mission Aborted!'
        }
    })
    
}

window.addEventListener("load", init);
