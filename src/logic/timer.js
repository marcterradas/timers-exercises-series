/**
 * transform seconds to string with format 00:00
 * @param {number} seconds
 * @returns string with format 00:00
 */
export function secondsToMinutes(seconds = 0) {
  // get minutes and seconds
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  // transform minutes and seconds to string
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}

/**
 * transform time string to seconds
 * @param {string} time
 * @returns integer seconds
 */
export function minutesToSeconds(time = "00:00") {
  if (!time) time = "00:00";

  let [minutes, seconds] = time.split(":");

  minutes = parseInt(minutes);
  seconds = parseInt(seconds);

  return minutes * 60 + seconds;
}

/**
 * substract one second to time string
 * @param {string} time
 * @returns string time
 */
export function substractOneSecond(time = "") {
  let seconds = minutesToSeconds(time);

  seconds -= 1;
  if (seconds < 0) seconds = 0;

  time = secondsToMinutes(seconds);
  return time;
}
