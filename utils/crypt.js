const bcrypt = require("bcrypt");

const getHash = (pass) => {
  return bcrypt.hash(pass, 10);
};

const comparePass = (pass, hashedPass) => {
  return bcrypt.compare(pass, hashedPass);
};

module.exports = { getHash, comparePass };

/// HASHING
// sayeed@1234 => asdhasjdhp9q8d3y29ruhfbpwkdshfc => lakshajdsa;dhsao;djla =>
