//task №1

const arrayNumbers = [1 , 2, 3, 4, 5, 6, 7, 8];

let convertNumbersInArray = (arrayNumbers) => {
	return arrayNumbers.map((number) => (number % 2 === 0) ? number += 1 : number -= 1);
}

console.log(convertNumbersInArray(arrayNumbers));


//task №2

const arrayStrings = ['hello', 'wOrLd'];
let convertStringsInArray = (arrayStrings) => {
	return arrayStrings.map((string) => string[0].toUpperCase() + string.slice(1).toLowerCase());
}

console.log(convertStringsInArray(arrayStrings));


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

let showUsers = (usersList, id) => {
	return usersList.filter((user) => {
		return !id.includes(user.id);
	});
}

console.log(showUsers(usersList, [1]));


//task №4

let forCheckPalindrome = (value) => value.split('').reverse().join('') === value;

console.log(forCheckPalindrome('112211'));


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

let convertUsersNewArray = (users) => {
	return users.map((user) => {
		return {
			id: user.id,
			fulName: `${user.first_name} ${user.last_name}`,
			email: user.email,
			gender: user.gender,
			ip_address: user.ip_address,
		}
	});
}

let convertUsersNewArrayWomen = (users) => {
	return users.filter((user) => user.gender.toLowerCase() === 'female');
}

let convertUsersNewArrayMan = (users) => {
	return users.filter((user) => user.gender.toLowerCase() === 'male');
}

let getResult = (users) => {
	return {
		women: convertUsersNewArrayWomen(convertUsersNewArray(users)),
		man: convertUsersNewArrayMan(convertUsersNewArray(users)),
	}
}
console.log(getResult(users));


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

let convertUsers = (newReleases) => {
	return newReleases.map((release) => {
		return {
			id: release.id, 
			title: release.title,
		};
	});
}
console.log(convertUsers(newReleases));


//task №7

let ids = (newReleases) => {
	return newReleases.filter(release => release.rating.includes(5.0));
}
console.log(ids(newReleases));