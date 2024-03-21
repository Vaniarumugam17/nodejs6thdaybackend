// Your code that uses the logger module
const log = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  log,
  error,
};
