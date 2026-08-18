function requireObjectCoercible(objectValue) {
  if (objectValue === undefined || objectValue === null) throw new TypeError();
}

function replaceAllPolyfill(searchValue, replaceValue) {
  const thisValue = this;
  requireObjectCoercible(thisValue);

  if (typeof searchValue === "object") {
    isRegexpr = searchValue instanceof RegExp;
    if (isRegexpr) {
      const flags = searchValue["flags"];
      requireObjectCoercible(flags);
      if (!flags.toString().includes("g")) throw new TypeError();
    }
    const replacer = searchValue[Symbol.replace];
    if (replacer !== undefined) {
      return replacer(searchValue, [thisValue, replaceValue]);
    }
  }

  const string = thisValue.toString();
  const searchString = searchValue.toString();
  const functionalReplace = typeof replaceValue === "function";

  if (!functionalReplace) replaceValue = replaceValue.toString();

  const searchLength = searchString.length;
  const advanceBy = Math.max(1, searchLength);
  const matchPositions = [];
  let position = string.indexOf(searchString, 0);

  while (position !== -1) {
    matchPositions.push(position);
    position = string.indexOf(searchString, position + advanceBy);
  }

  let endOfLastMatch = 0;
  let result = "";

  for (const matchPosition of matchPositions) {
    const preserved = string.substring(endOfLastMatch, matchPosition);
    let replacement;
    if (functionalReplace) {
      replacement = replaceValue("", [searchString, matchPosition, string]);
    } else {
      // assert replaceValue is a string.
      // typeof replaceValue === 'string'
      // const captures = [];
      replacement = replaceValue; // getSubstitution(searchString, string, matchPosition, captures, undefined, replaceValue);
    }
    result += preserved + replacement;
    endOfLastMatch = matchPosition + searchLength;
  }

  if (endOfLastMatch < string.length) {
    result += string.substring(endOfLastMatch);
  }

  return result;
}

// if (!String.prototype.replaceAll)
String.prototype.replaceAll = replaceAllPolyfill;

const replacedAllString =
  "Повар спрашивает повара: «Повар, какова твоя профессия?»".replaceAll(
    /(п)овар/gi,
    "$1рограммист",
  );

console.log(replacedAllString);
