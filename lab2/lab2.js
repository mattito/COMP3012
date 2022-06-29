function greeting(name) {
  console.log(name);
}

function getDayOfTheWeek() {
  console.log("The day of the week is Wednesday.");
}

function greeting2(name) {
  console.log(name);
}

// Gives permission to use in another file
module.exports = { greeting, greeting2, getDayOfTheWeek };