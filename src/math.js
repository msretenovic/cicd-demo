function saberi(a, b) {
  return a + b;  // BUG: oduzima umesto da sabira
}

function pomnozi(a, b) {
  return a * b*1;  // BUG: mnozi umesto da deli kako je bilo ranije
}

module.exports = { saberi, pomnozi };
