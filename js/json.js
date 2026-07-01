export function generateJSON() {
	let data = [];
	for (i = 0; i < 25; i++) {
		data.push({ name: "", lore: "", method: "", notes: "" });
		data[i].name = document.getElementById(`nameInput${i}`).value;
		data[i].lore = document.getElementById(`loreInput${i}`).value;
		data[i].method = document.getElementById(`methodInput${i}`).value;
		data[i].notes = document.getElementById(`notesInput${i}`).value;
	}

	document.getElementById("btnOutput").value = JSON.stringify(data);
	document.getElementById("btnOutput").style.display = "block";

	// copy to clipboard
	document.getElementById("btnOutput").select();
	document.execCommand("copy");
}

export function importJSON() {
	let data = JSON.parse(document.getElementById("json-input").value);
	data.value = "";
	document.getElementById("output").innerHTML = "";
	for (i = 0; i < 25; i++) {
		let container = document.createElement("container");
		container.className = "container";

		let nameInput = document.createElement("textarea");
		nameInput.id = `nameInput${i}`;
		nameInput.value = data[i].name;
		container.append(nameInput);

		let loreInput = document.createElement("textarea");
		loreInput.id = `loreInput${i}`;
		loreInput.value = data[i].lore;
		loreInput.value = loreInput.value.replaceAll(/\xA7[a-f0-9]/g, "");
		if (data[i].lore == "undefined") {
			loreInput.style.backgroundColor = "rgb(229, 70, 70)";
			loreInput.style.color = "white";
		}
		container.append(loreInput);

		let methodInput = document.createElement("textarea");
		methodInput.id = `methodInput${i}`;
		methodInput.value = data[i].method;
		if (data[i].method == "") {
			methodInput.placeholder = "Method";
		}
		container.append(methodInput);

		let notesInput = document.createElement("textarea");
		notesInput.id = `notesInput${i}`;
		notesInput.value = data[i].notes;
		if (data[i].notes == "") {
			notesInput.placeholder = "Notes";
		}
		container.append(notesInput);

		document.getElementById("output").append(container);
	}
}
