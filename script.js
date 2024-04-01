function rollYellowDie() {
    return Math.floor(Math.random() * 20) + 1;
}
function rollRedDie() {
    return Math.floor(Math.random() * 20) + 1;
}
function rollBlueDie() {
    return Math.floor(Math.random() * 20) + 1;
}
function rollWhiteDie() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollWhitishDie() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollBlackDie() {
    const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    return values[Math.floor(Math.random() * values.length)];
}
function rollGreyDie() {
    return Math.floor(Math.random() * 10);
}
function rollBlackishDie() {
    const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    return values[Math.floor(Math.random() * values.length)];
}
function rollGreyishDie() {
    return Math.floor(Math.random() * 10);
}

function rollExtraD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollExtraD20() {
    return Math.floor(Math.random() * 20) + 1;
}