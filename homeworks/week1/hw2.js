export const capitalize = (str) => {
  let first = str.substr(0, 1).toUpperCase();
  let last = str.substr(1);
  str = first + last;
  return str;
}