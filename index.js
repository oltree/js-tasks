//Task 1: finding the sum of digits
const sumDigints = (stringifyNumber) => {
  const arrayDigits = stringifyNumber.split("");

  const sumValue = arrayDigits.reduce(
    (accumulator, value) => accumulator + +value,
    0
  );

  if (sumValue > 9) {
    return sumDigints(sumValue.toString());
  } else {
    return sumValue;
  }
};
//console.log(sumDigints("88"));

//Task 2: removing characters from a string
const removeChars = (string, length) => {
  if (string.length < length) return string;

  return string.slice(length);
};
//console.log(removeChars("Hello World!", 1));

//Task 3: insert '-' in string
const insertSymbolsInString = (string) => {
  //return string.split(" ").join("-");
  return string.replace(/\s/g, "-");
};
//console.log(insertSymbolsInString("Hello World!"));

//Task 4: StartCase
const stringInStartCase = (string) => {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
//console.log(stringInStartCase("start case"));

//Task 5: case change to reverse
const caseChange = (string) => {
  const arrayWords = string.split("");

  const result = arrayWords.map((char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });

  return result.join("");
};
//console.log(caseChange("hEllO WorLD"));

//Task 6: insensitive search
const insensitiveSearch = (string1, string2) => {
  return string1.includes(string2);
};
//console.log(insensitiveSearch("hello my friend", "my"));

//Task 7: get filename
const getPathName = (string) => {
  return string.split("/").pop();
};
//console.log(getPathName("/home/user/dir/file.txt"));
