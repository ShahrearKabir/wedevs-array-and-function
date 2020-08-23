//Que: 1

let allRead = true;

let notifications = [
	{ message: 'Lorem', read: true },
	{ message: 'Ipsum', read: true },
	{ message: 'Dolor', read: true },
	{ message: 'Sit', read: false },
	{ message: 'Amet', read: true }
];

console.log("notifications", notifications);

function changeArrayReadValue(notification) {
	let i = 0
	return readValue => { notification[i].read = readValue; i++ }

}

let changed = changeArrayReadValue(notifications)

changed(false)
changed(false)
changed(false)
changed(false)
changed(false)

//console.log("changed", changed);
console.log("notifications", notifications);


//Que: 2

let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
console.log('unique', unique);

//Que: 3

function wearPPE() {
	return new Promise((resolve) => {
		setTimeout(() => resolve('Wearing PPE'), 2000);
	})
}
function fightCorona() {
	return new Promise((resolve) => {
		setTimeout(() => resolve('Fighting Corona'), 1000);
	})
}

async function execute() {
	await wearPPE().then(result => console.log(result));
	await fightCorona().then(result => console.log(result));
}
execute();