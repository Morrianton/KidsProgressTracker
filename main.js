var rightVal = '293px';
var newRightVal = 0;

document.getElementById('forward').addEventListener('click', event => {
    rightVal = rightVal.replace(/px/gi, '');
    newRightVal = Number(rightVal);

    if( newRightVal < 1193 )
    {
        newRightVal += 100;
        rightVal = newRightVal.toString() + 'px';
        document.getElementById('slider').style.right = rightVal;
    }
});

document.getElementById('reverse').addEventListener('click', event => {
    rightVal = rightVal.replace(/px/gi, '');
    newRightVal = Number(rightVal);

    if( newRightVal > 293 )
    {
        newRightVal -= 100;
        rightVal = newRightVal.toString() + 'px';
        document.getElementById('slider').style.right = rightVal;
    }
});

// TODO: use local storage to save car's position

// TODO: animate slider/car movement

// TODO: add option to enable car to be over "START" and "FINISH" bubbles

// TODO: add option for vehicle picker

// TODO: check time of day and season/holiday for decorations