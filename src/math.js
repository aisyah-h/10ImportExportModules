const pi = 3.1415926;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
//use curly braces to export multiple things in this file, on top of default
//ie. non default exports
export { doublePi, triplePi };
