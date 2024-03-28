// Code your solution here
const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'San Francisco' },
    { name: 'bobby', hometown: 'Tampa Bay' }
  ];
  

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
  }
  function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
  }
  
