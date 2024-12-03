function readableCreateFrame(names) {
  const maxLen = Math.max(...names.map((name) => name.length));
  const fullAsterisks = "*".repeat(maxLen + 4);
  let result = fullAsterisks;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const spaces = " ".repeat(maxLen - name.length);
    result += `\n* ${name}${spaces} *`;
  }

  result += `\n${fullAsterisks}`;
  return result;
}
/**
 * @param {string[]} names
 * @returns {string} a frame of asterisks
 */
function createFrameOg(names) {
  // Code here
  const maxLen = Math.max(names.map((e) => e.length));
  const fullAsterisks = "*".repeat(maxLen + 4);
  let res = fullAsterisks;

  for (let i = 0; i < maxLen; i++) {
    const currWord = names[i];
    if (currWord.length === maxLen) res += `\n* ${currWord} *`;
    else {
      const addedSpaces = " ".repeat(maxLen - currWord.length);
      res += `\n* ${currWord}${addedSpaces} *`;
    }
  }

  res += `\n${fullAsterisks}`;

  return res;
}

/**
 * @param {string[]} names
 * @returns {string} a frame of asterisks
 */
function createFrame(names) {
  // Code here
  let maxLen = 0;
  names.forEach((name) => {
    if (name.length > maxLen) maxLen = name.length;
  });
  const formattedItems = names.map((name) => {
    const spaces = " ".repeat(maxLen - name.length);
    return `* ${name}${spaces} *`;
  });

  let res = `*${"*".repeat(maxLen + 2)}*\n${formattedItems.join(
    "\n"
  )}\n*${"*".repeat(maxLen + 2)}*`;

  return res;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Resultado esperado:
// ********
// * midu *
// ********

// createFrame(['a', 'bb', 'ccc'])

// // Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******
