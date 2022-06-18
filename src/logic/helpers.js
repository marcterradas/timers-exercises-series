export function cleanString(string = "") {
  return string.trim().charAt(0).toUpperCase();
}

export function cleanNumber(number = 0) {
  return isNaN(number) ? 0 : parseInt(number);
}
