let generateBBCode;
let generateJSON;
let importJSON;

window.onload = async function () {
	({ generateBBCode } = await import("./js/bbcode.js"));
	({ generateJSON, importJSON } = await import("./js/json.js"));

	goals = [];

	await fetch(`https://api.hypixel.net/resources/skyblock/bingo`)
		.then((response) => response.json())
		.then((data) => {
			goals = data.goals;
		})
		.catch(function (error) {
			console.log(error);
		});

	for (i = 0; i < 25; i++) {
		goals.push({ name: "", lore: "", method: "", notes: "" });

		let container = document.createElement("container");
		container.className = "container";

		let nameInput = document.createElement("textarea");
		nameInput.id = `nameInput${i}`;
		nameInput.value = goals[i].name;
		container.append(nameInput);

		let loreInput = document.createElement("textarea");
		loreInput.id = `loreInput${i}`;
		loreInput.value = goals[i].lore;
		loreInput.value = loreInput.value.replaceAll(/\xA7[a-f0-9]/g, "");

		if (goals[i].lore == undefined) {
			loreInput.style.backgroundColor = "rgb(229, 70, 70)";
			loreInput.style.color = "white";
		}

		container.append(loreInput);

		let methodInput = document.createElement("textarea");
		methodInput.id = `methodInput${i}`;
		methodInput.placeholder = "Method";
		container.append(methodInput);

		let notesInput = document.createElement("textarea");
		notesInput.className = `notesInput`;
		notesInput.id = `notesInput${i}`;
		notesInput.placeholder = "Notes";
		container.append(notesInput);

		document.getElementById("output").append(container);
	}
};
