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
