/**
 * clean param string, trim string and capitalize first letter
 * @param {string} string
 * @returns cleaned string
 */
export function cleanString(string = "") {
  if (!string) {
    string = "";
  }
  string = string.trim();
  const firstLetter = string.trim().charAt(0).toUpperCase();
  const restOfString = string.slice(1);
  return `${firstLetter}${restOfString}`;
}

/**
 * clean pararm numberif param is not a valid number transform to 0
 * @param {integer} number
 * @returns parsed number
 */
export function cleanNumber(number = 0) {
  return isNaN(number) || !number ? 0 : parseInt(number);
}
