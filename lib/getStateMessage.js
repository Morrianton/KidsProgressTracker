/*-------------------------------------------------------------------------------------------------------------------------
    E X P O R T S
=========================================================================================================================*/
export default (position) => {
    let state = "";

    switch (Number(position)) {
        case 0:
            state = "Let's get started!";
            break;
        case 1:
        case 2:
            state = "You can do it!";
            break;

        case 3:
        case 4:
            state = "You're on your way!";
            break;

        case 5:
        case 6:
            state = "Great work!";
            break;

        case 7:
        case 8:
            state = "You're doing better!";
            break;

        case 9:
        case 10:
            state = "You're the best!";
            break;
        case 11:
            state = "You did it!";
            break;
        default:
            state = "Let's get started!";
    }
    return state;
}