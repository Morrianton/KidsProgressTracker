/*-------------------------------------------------------------------------------------------------------------------------
    D E P E N D E N C I E S
=========================================================================================================================*/
import { restorePosition, restoreState } from '../lib/init.js';
import convertPosition from '../lib/convertPosition.js';

/*-------------------------------------------------------------------------------------------------------------------------
    G L O B A L   V A R I A B L E S
=========================================================================================================================*/
var position = 1;
var statusMessage = "";
var carDrivingForwardAudio = new Audio('../resources/car_driving_forward.mp3');
var carDrivingBackwardAudio = new Audio('../resources/car_driving_backward.mp3');

/*-------------------------------------------------------------------------------------------------------------------------
    M A I N . J S
=========================================================================================================================*/

window.onload = function() { 
    // initializes car/slider position
    position = localStorage.getItem("position");

    // restores car/slider position
    document.getElementById('slider').style.right = restorePosition(position);

    // restores status message
    document.getElementById('state-message').innerHTML = restoreState( position );
};


// moves car/slider forward one position
document.getElementById('btn-forward').addEventListener('click', event => {
    if (position < 10) {
        ++position;
        localStorage.setItem("position", position);
        document.getElementById('slider').style.right = convertPosition(position);
        document.getElementById('state-message').innerHTML = restoreState( position );
        carDrivingForwardAudio.play();
    }
})

// moves car and slider backward one position
document.getElementById('btn-reverse').addEventListener('click', event => { 
    if (position > 1) {
        --position;
        localStorage.setItem("position", position);
        document.getElementById('slider').style.right = convertPosition(position);
        document.getElementById('state-message').innerHTML = restoreState( position );
        carDrivingBackwardAudio.play();
    }
});

// TODO: add position reset button

// TODO: add state message to nav

// TODO: add time remaining option (hours, days, months)

// TODO: add reward option (emoji)

// TODO: animate slider/car movement

// TODO: add option to enable car to be over "START" and "FINISH" bubbles

// TODO: v.2: make compatible with mobile (vertical foreshortened road where lines move instead of the actual position)

// TODO: v.2: add option for vehicle picker (when refactoring to support mobile will need front view emoji)

// TODO: v.2: check time of day and season/holiday for decorations