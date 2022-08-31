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

//Task 14: async-await + setTimeout
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const someAsyncFunction = async () => {
  await delay(1000);
  console.log(1);
  await delay(2000);
  console.log(2);
  await delay(3000);
  console.log(3);
};
//someAsyncFunction();

//Task 15: get info about pokemon
/* const getInfoAboutPokemon = async (pokeName) => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  try {
    const data = await fetch(BASE_URL).then((response) => response.json());

    data.stats = data.stats.reduce((accumulator, { base_stat, stat }) => {
      accumulator[stat.name] = base_stat;

      return accumulator;
    }, {});

    return data;
  } catch (error) {
    console.log(error.message);
  }
}; */
//getInfoAboutPokemon("venusaur").then((data) => console.log(data));

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const getInfoAboutPokemonsPromiseVersion = new Promise((resolve) => {
  resolve(fetch(BASE_URL).then((response) => response.json()));
})
  .then((data) =>
    data.results.map((pokemon) =>
      fetch(pokemon.url).then((response) => response.json())
    )
  )
  .then((data) => Promise.all(data))
  .then(
    (data) =>
      (data = data.map((pokemon) => {
        pokemon.stats = pokemon.stats.reduce(
          (accumulator, { base_stat, stat }) => {
            accumulator[stat.name] = base_stat;

            return accumulator;
          },
          {}
        );

        return pokemon;
      }))
  )
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message)); */
//.finally(() => console.log("finally!"));

//Task 16: asynchrony
/* console.log("Start");

console.log("Start 2");

function timeout2sec() {
  console.log("timeout2sec");
}

window.setTimeout(function () {
  //можно вместо function применять стрелочную функцию
  //в большинсве будем использовать анонимную функцию
  console.log("Inside timeout, after 2000 seconds");
}, 5000);

window.setTimeout(timeout2sec, 2000); 
//вызываем без скобочек, потому что с ними она будет вызвана сразу же, а без () мы передаем ее просто как ссылку
console.log("End"); */

//Task 17: Promise
/* console.log("request data...");
//реализовали последовательную ассинхронность с помощью колбеков
setTimeout(() => {
  //первый колбек, где описываем логику(первая вложенность)
  console.log("preparing data..");

  const backendData = {
    sever: "aws",
    port: 2000,
    status: "working",
  };

  setTimeout(() => {
    //идет следующая ассинхронность, используем второй колбек и внутри мы уже реализовываем наш функционал(вторая вложенность)
    backendData.modified = true;
    console.log("data recerved", backendData);
  }, 2000);
}, 2000);
//этот подход плох тем, что мы получаем достаточно большую вложенность(получаем большое количество колбеков внутри других колбеков)

//промисы нужны для того, чтоб решить данную задачу и упростить работу с ассинхронными операциями
//делаем то же самое только с промисами
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("preparing data..");
    const backendData = {
      sever: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData); //вызываем ф-ю resolve(которая вызывается тогда, когда закончена ассинхронная операция и закончена УСПЕШНО)
  }, 2000);
});

//мы сделали тоже самое с промисами, но дальше идет код, который показывает что могут промисы
//promise - это промис, вызываеи метод then(читается "когда", промис когда выполнится)
//данный колбек будет вызван тогда, когда закончится некоторая ассинхронная операция(то есть будет вызван метод resolve)
//далее нам нужно выполнить вторую ассинхронную операцию, которая написана выше, и для этого нам нужен доступ к переменной backendData, мы тогда передаем ее методу resolve, и данный параметр будет получен в методе then как просто например объект data
promise.then((data) => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data); //сообщаем промису promise2, что он успешно завершился
    }, 2000);
  });
  //внутри промиса мы обращаемся к promise2 и когда он будет успешно выполнен мы будем получать некоторый объект clientData
  promise2.then((clientData) => {
    console.log("dara recerved", clientData); //получаем тебе же самые данные + новое свойство modified: true
  });
});

//вот результат
//когда промис выполнится мы делаем следующую ассинхронную операцию, когда она выполнится мы делаем те манипуляции, которые нам нужны(это с помощью then-ов), получается одна вложенность, а операций может быть сколько угодно
promise
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        resolve(data); //сообщаем промису p2, что он успешно завершился
      }, 2000);
    });
  })
  .then((clientData) => {
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log("modified", data);
  })
  //в случае ошибки мы будем ее отлавливать(для этого нужен метод catch) и выводить
  .catch((err) => console.error("Error: ", err))
  //метод finally будет вызван в любом случае, вне зависимости от того была ли ошибка или успешно выполненно
  .finally(() => console.log("finally!"));

//фишки с промисами
//есть фунция, которая возвращаем промис и которая вызывает метод resolve через ms

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
sleep(2000).then(() => console.log("after 2 sec"));

//Pormise all
const sleep2 = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
//пока все не выполнятся, результата не будет
Promise.all([sleep2(2000), sleep2(5000)]).then(() => {
  console.log("all promises");
});
//этот метод принимает набор промисов, и когда самый первый завершится, он вернет результат
Promise.race([sleep2(2000), sleep2(5000)]).then(() => {
  console.log("race promises");
}); */

//Task 18: sum of even and odd numbers
const evenAndOddnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];

const sumEvenAndOdd = (numbers) => {
  return numbers.reduce(
    (accumulator, number) => {
      if (number % 2 === 0) {
        accumulator.even += number;
      } else {
        accumulator.odd += number;
      }
      return accumulator;
    },
    { even: 0, odd: 0 }
  );
};
//console.log(sumEvenAndOdd(evenAndOddnumbers));

//Task 19: limit string length
const limitStringLength = (string, n, symb) => {
  if ((!n && !symb) || string.length < n) return string;
  symb = symb || "...";

  return `${string.slice(0, n) + symb}`;
};
//console.log(limitStringLength("Hello, my best friend", 5, "!"));

//Task 20: split string into chunks
const cutString = (string, n) => {
  let result = [];
  for (let i = 0; i < string.length; i += n) {
    result.push(string.substr(i, n));
  }

  return result;
};
//console.log(cutString("relationship", 3));

//Task 21: remove spaces from a string
const removeSpaces = (string) => string.replace(/\s+/g, " ");
//console.log(removeSpaces("     Hello,       World!"));

//Task 22: unique letters
const uniqueLetters = (str) => {
  return str
    .split("")
    .filter((value) => str.lastIndexOf(value) === str.indexOf(value))
    .join(",");
};
//console.log(uniqueLetters("anaconda"));
