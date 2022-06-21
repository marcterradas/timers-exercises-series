export function cleanString(string = "") {
  if (!string) {
    string = "";
  }
  string = string.trim();
  const firstLetter = string.trim().charAt(0).toUpperCase();
  const restOfString = string.slice(1);
  return `${firstLetter}${restOfString}`;
}

export function cleanNumber(number = 0) {
  return isNaN(number) || !number ? 0 : parseInt(number);
}
