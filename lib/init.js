/*-------------------------------------------------------------------------------------------------------------------------
    D E P E N D E N C I E S
=========================================================================================================================*/
import convertPosition from '../lib/convertPosition.js';
import getStateMessage from '../lib/getStateMessage.js';

/*-------------------------------------------------------------------------------------------------------------------------
    E X P O R T S
=========================================================================================================================*/
export function restorePosition(position) {
    if (position === null)
    {
        localStorage.setItem("position", 1);
        Number(position) = localStorage.getItem("position");
        position = convertPosition(position);
        return position;
    }
    else
    {
        return convertPosition(Number(position));
    }
}

export function restoreState(position) {
    return getStateMessage(position);
}

export function resetPosition() {
    localStorage.removeItem("position");
}