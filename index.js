//task №1

const arrayNumbers = [1 , 2, 3, 4, 5, 6, 7, 8];

let isEven = (arrayNumbers) => {
	return arrayNumbers.map((number) => (number % 2 === 0) ? number + 1 : number - 1);
}

console.log(isEven(arrayNumbers));


//task №2

const arrayStrings = ['hello', 'wOrLd'];

const capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();

const capitalizeWords = (words) =>  words.map((word) => capitalize(word));

console.log(capitalizeWords(arrayStrings));


//task №3

const usersList = [
	{
		id: 1,
		name: 'Alex',
	},
	{
		id: 2,
		name: 'Toma',
	},
	{
		id: 3,
		name: 'Max',
	},
]

const showUsers = (usersList, blackListId) => {
	return usersList.filter((user) => !blackListId.includes(user.id));
}

console.log(showUsers(usersList, [1]));


//task №4

const forCheckPalindrome = (value) => value.split('').reverse().join('').toLowerCase() === value.toLowerCase();

console.log(forCheckPalindrome('Шалаш шалаШ'));


//task №5
const users = [
	{
		id: 1,
		first_name: 'Jeanette',
		last_name: 'Penddreth',
		email: 'jpenddreth0@census.gov',
		gender: 'Female',
		ip_address: '26.58.193.2',
	},
	{
		id: 2,
		first_name: 'Petr',
		last_name: 'Jackson',
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ip_address: '229.179.4.212',
	},
];

const devibeByGender = (users) => {
	const women = [];
	const man = [];

	users.forEach(({first_name, last_name, ...otherFields}) => {
		const userToPush = {
			...otherFields,
			fulName: `${first_name} ${last_name}`,
		}

		userToPush.gender === 'Male' ? man.push(userToPush) : women.push(userToPush);
	})

	return {
		women, 
		man
	};
}
console.log(devibeByGender(users));


//task №6
const newReleases = [
	{
		id: 70111470,
		title: 'Die Hard',
		boxart: 'https://learn.javascript.ru/object1111',
		uri: 'https://learn.javascript.ru/object2222',
		rating: [5.0],
		bookmark: [],
	},
	{
		id: 1561615454,
		title: 'Bad Boys',
		boxart: 'https://learn.javascript.ru/object1111',
		uri: 'https://learn.javascript.ru/object2222',
		rating: [4.0],
		bookmark: [{id: 23123123, time: 1232132}],
	},
	{
		id: 7011142323270,
		title: 'The Chamber',
		boxart: 'https://learn.javascript.ru/object1111',
		uri: 'https://learn.javascript.ru/object2222',
		rating: [4.0],
		bookmark: [],
	},
	{
		id: 8729789470,
		title: 'Fracture',
		boxart: 'https://learn.javascript.ru/object1111',
		uri: 'https://learn.javascript.ru/object2222',
		rating: [5.0],
		bookmark: [{id: 3123, time:32332}],
	},
];

let mapReleases = (releases) => {
	return releases.map(({id, title}) => ({id, title}));
}

console.log(mapReleases(newReleases));


//task №7

let ids = (releases) => {
	const result = [];

	releases.forEach(({id, rating}) => {
		if (rating[0] === 5) {
			result.push(id);
		}
	})

	return result;
}

console.log(ids(newReleases));