/**
 * @param {number[]} gifts
 * @returns {number[]} ordered unique values
 */
function prepareGifts(gifts) {
  // Code here
  const foundNums = new Map();
  const uniqueArr = [];
  for (let i = 0; i < gifts.length; i++) {
    if (!foundNums.has(gifts[i])) uniqueArr.push(gifts[i]);
  }

  unique.sort((a, b) => a - b);
  return unique;
}
