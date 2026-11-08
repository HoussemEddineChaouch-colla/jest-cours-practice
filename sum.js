const theSum = (...numbers) => {
  return numbers.reduce((pre, cv) => pre + cv, 0);
};

module.exports = theSum;
