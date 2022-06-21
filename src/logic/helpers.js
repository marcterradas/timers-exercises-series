export function cleanString(string = "") {
  const firstLetter = string.trim().charAt(0).toUpperCase();
  const restOfString = string.slice(1);
  return `${firstLetter}${restOfString}`;
}

export function cleanNumber(number = 0) {
  return isNaN(number) ? 0 : parseInt(number);
}
