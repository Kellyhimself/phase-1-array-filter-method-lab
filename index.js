// Code your solution here

function findMatching(driversArray, string) {
  return driversArray.filter((driver) => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}
function fuzzyMatch(driversArray, string) {
  return driversArray.filter((driver) => {
    return driver.startsWith(string);
  });
}
function matchName(driverObject, string) {
  return driverObject.filter((driver) => {
    return driver.name === string;
  });
}
