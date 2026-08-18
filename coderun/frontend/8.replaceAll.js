function replaceAllPolyfill(searchValue, replaceValue) {
  let newPattern = searchValue;

  if (typeof searchValue === "symbol") {
    throw new TypeError("Cannot convert a Symbol value to a string");
  }

  if (searchValue instanceof RegExp && !searchValue.flags.includes("g")) {
    // newPattern = new RegExp(pattern.source, pattern.flags + "g");
    throw new TypeError(
      "String.prototype.replaceAll called with a non-global RegExp argument",
    );
  }

  if (typeof searchValue === "string") {
    const escapedPattern = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    newPattern = new RegExp(escapedPattern, "g");
  }

  return this.replace(newPattern, replaceValue);
}

// if (!String.prototype.replaceAll)
String.prototype.replaceAll = replaceAllPolyfill;

// if (!String.prototype.replaceAll)
String.prototype.replaceAll = replaceAllPolyfill;
