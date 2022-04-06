export const MinSec = (seconds) => {
    let sec = Math.floor(seconds % 60);
    let min = parseInt(seconds / 60);
    if(sec.toString().length === 1) sec = "0" + sec;
    return min + ":" + sec;
}

export const HourMin = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}