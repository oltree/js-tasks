//Task №1

const videos = [
	{
	id: 65432445,
	title: 'The Chamber',
	},
	{
		id: 675465,
		title: 'Fracture',
	},
	{
		id: 70111470,
		title: 'Bad Boys',
	},
	{
		id: 654356453,
		title: 'Die Hard',
	},
];

const videoTitleById = (videoItem) => videoItem.reduce((result, video) => {
    return {
      ...result,
      [video.id]: video.title,
    }
  }, {});
  
console.log(videoTitleById(videos));


//Task №2

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

//solutionNumberOne
const arrayWithArea = boxarts.map((item) => {
  return {
    area : item.width * item.height,
    url : item.url,
  }
});

const getUrl = arrayWithArea.reduce((result, item) => {
  return result.area > item.area ? result : item
});

console.log(`URL max square - ${getUrl.url}`);

//solutionNumberTwo
const showMaxUrlInArray = boxarts.reduce((result, item) => {
  item.area = item.width * item.height;

  return result.area > item.area ? result : item
}, 0);

console.log(`URL with max area - ${showMaxUrlInArray.url}`);


//Task №3
const arrayNumbersWithRepeats = [2, 2, 3, 2, 5, 9, 2, 2, 2, 7, 6, 2, 2, 2, 4];

const objectWithRepeatValues = arrayNumbersWithRepeats.reduce((result, value) => {
  result[value] = (result[value] || 0) + 1;
  return result;
}, {})

const maxRepeatValue = Math.max(...Object.values(arrayNumbersWithRepeats));

for(let key in objectWithRepeatValues) {
  if(objectWithRepeatValues[key] === maxRepeatValue) {
    console.log(`Max repeat: ${objectWithRepeatValues[key]}, value: ${key}`)
  }
};


//Task №4

//solutionNumberOne
const objectWithValues = {a: 1, b: 'Hello', c: null, z: undefined};

const fildFilterWithValue = (fildFilter) => {
  for (let value in objectWithValues) {
    if (objectWithValues[value] === null || objectWithValues[value] === undefined) {
      delete objectWithValues[value];
    }
  }
  return objectWithValues;
}

console.log(fildFilterWithValue(objectWithValues));

//solutionNumberTwo
const resultFilter = Object.entries(objectWithValues).reduce((acc,[key,value]) => (
  value == null ? acc : (acc[key] = value, acc)
), {})

console.log(resultFilter);


//Task №5

//solutionNumberOne
const arrayNumbers = [1, 1, 2, 3, 3];

const objectWithRepeat = arrayNumbers.reduce((result, value) => {
  result[value] = (result[value] || 0) + 1;
  return result;
}, {})

for(let key in objectWithRepeat) {
  if(objectWithRepeat[key] ===  1) {
    console.log(`Min repeat: ${objectWithRepeat[key]}, value: ${key}`)
  }
};

//solutionNumberTwo
let result;
for(let i of arrayNumbers)
{
  if(arrayNumbers.indexOf(i) === arrayNumbers.lastIndexOf(i)) result = i;
}
console.log(result);


//Task №6

const cutString = (string, maxLength) => {
  if (string.length > maxLength) {
    string = string.slice(0, maxLength) + '...';
  }
  return string;
}
console.log(cutString('hello', 3));


//Task №7

const createPromise = (number) => {
  return new Promise(resolve => {
    setTimeout(() =>{ resolve(number)}, 500)
  })
}

const someFn = async () => {
	const data = await createPromise(5);
  console.log(data);
}
someFn()

//
setTimeout(function(){console.log("Hello")},1000);

//
function waitforme(milisec) {
  return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
  })
}

async function printy() {
  for (let i = 0; i < 10; ++i) {
      await waitforme(1000);
      console.log(i);
  }
  console.log("Loop execution finished!)");
}

printy();


//
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  await delay(1000);
  console.log(1);
  await delay(5000);
  console.log(2);
})();