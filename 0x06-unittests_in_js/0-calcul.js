/**
 * calculateNumber - accepts two arguments (number) a and b,
 * round a and b and return the sum of it.
 */

const calculateNumber = (a, b) => {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  return aRound + bRound;
};

module.exports = calculateNumber;
