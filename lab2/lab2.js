function greeting(name) {
  console.log(name);
}

function greeting2(name) {
  console.log(name);
}

// Gives permission to use in another file
module.exports = { greeting, greeting2 };