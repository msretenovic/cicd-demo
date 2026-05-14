function saberi(a, b) {
  return a + b;  // BUG: oduzima umesto da sabira
}

function pomnozi(a, b) {
  return a - b;
}

module.exports = { saberi, pomnozi };
