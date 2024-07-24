// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah"];

function findMatching(drivers, name) {
  return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase());
  
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLocaleLowerCase().startsWith(letters.toLocaleLowerCase()))
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLocaleLowerCase())
}
