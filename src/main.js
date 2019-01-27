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

/*-------------------------------------------------------------------------------------------------------------------------
    M A I N . J S
=========================================================================================================================*/

window.onload = function() { 
    // initializes car/slider position
    position = localStorage.getItem("position");

    // restores car/slider position
    document.getElementById('slider').style.right = restorePosition(position);

    // restores status message
    // document.getElementById('').innerHTML = restoreState( position );
};


// moves car/slider forward one position
document.getElementById('forward').addEventListener('click', event => {
    if (position < 10) {
        ++position;
        localStorage.setItem("position", position);
        document.getElementById('slider').style.right = convertPosition(position);
    }
})

// moves car and slider backward one position
document.getElementById('reverse').addEventListener('click', event => {
    if (position > 1) {
        --position;
        localStorage.setItem("position", position);
        document.getElementById('slider').style.right = convertPosition(position);
    }
});

// TODO: add position reset button

// TODO: add space tracker to nav

// TODO: add state message to nav

// TODO: animate slider/car movement

// TODO: add option to enable car to be over "START" and "FINISH" bubbles

// TODO: add option for vehicle picker

// TODO: check time of day and season/holiday for decorations