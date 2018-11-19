// Code your solution in this file
function findMatching (drivers, string) {
  return drivers.filter(function (drivername) {
    return drivername.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (name) {
    return string[0].toLowerCase() === name[0].toLowerCase();
  })
}

function matchName (drivers, string) {
  return drivers.filter(function (driver){
    return string.toLowerCase() === driver.name.toLowerCase();
  })
}
