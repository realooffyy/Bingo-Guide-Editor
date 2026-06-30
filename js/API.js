let res;

await fetch(`https://api.hypixel.net/resources/skyblock/bingo`)
	.then((response) => response.json())
	.then((data) => {
		res = data;
	})
	.catch(function (error) {
		console.log(error);
	});

export const API = res;
