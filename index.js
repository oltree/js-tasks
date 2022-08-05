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

//Task 8: array[id = title]
const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Bad Boys",
  },
  {
    id: 654356453,
    title: "Die Hard",
  },
];

const createIdTitleMap = (videos) => {
  return videos.reduce((accumulator, { id, title }) => {
    accumulator[id] = title;

    return accumulator;
  }, {});
};
//console.log(createIdTitleMap(videos));

//Task9: #camelCase
const creater = (string) => {
  const arrayWords = string.trim().split(" ");

  const result = arrayWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  return `#${result}`;
};
//console.log(creater("       hello              worLD              "));

//Task9: url wirh max area

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
  },
  {
    width: 150,
    height: 200,
    url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",
  },
  {
    width: 500,
    height: 200,
    url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
  },
  {
    width: 425,
    height: 150,
    url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf",
  },
];

const getMaxArea = (boxarts) => {
  const { url } = boxarts.reduce((result, boxart) => {
    const currentValueArea = result.width * result.height;
    const nextValueArea = boxart.width * boxart.height;

    return currentValueArea > nextValueArea ? result : boxart;
  }, {});

  return url;
};
//console.log(getMaxArea(boxarts));

//Task 10: max repeat number in array
const arrayNumbersWithRepeats = [2, 2, 3, 2, 5, 9, 2, 2, 2, 7, 6, 2, 2, 2, 4];

const findMostFrequentNumber = (array) => {
  const filteredArray = array.reduce((accumulator, number) => {
    if (accumulator[number]) {
      accumulator[number] += 1;
    } else {
      accumulator[number] = 1;
    }

    return accumulator;
  }, {});

  for (let key in filteredArray) {
    if (filteredArray[key] === Math.max(filteredArray[key])) return key;
  }
};
//console.log(findMostFrequentNumber(arrayNumbersWithRepeats));

//Task 11: before/after string
const str = "Hello - world!";

const getSubstr = (str, char, pos) => {
  if (pos === "after") {
    return str.slice(str.indexOf(char) + 1);
  } else if (pos === "before") {
    return str.slice(0, str.indexOf(char) - 1);
  }
};
//console.log(getSubstr(str, "-", "after"));

//Task 12: insert substring
const insertSubstring = (str1, str2, pos) => {
  const array = str1.split(" ");
  array.splice(pos, 0, str2);
  return array.join(" ");
};
//console.log(insertSubstring("Hi! How are you?", "lol", 2));

//Task 13: filter out null и undefined
const objectWithValues = { a: 1, b: "Hello", c: null, z: undefined };

const filterOutNull = (object) => {
  const result = {};

  for (const key in object) {
    if (object[key] !== null && typeof object[key] !== "undefined") {
      result[key] = object[key];
    }
  }

  return result;
};
//console.log(filterOutNull(objectWithValues));
