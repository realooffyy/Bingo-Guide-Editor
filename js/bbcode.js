export async function generateBBCode() {
	let API;
	({ API } = await import("./callAPI.js"));

	let goals = [];

	for (i = 0; i < 25; i++) {
		goals.push({ name: "", lore: "", method: "", notes: "" });
		goals[i].name = document.getElementById(`nameInput${i}`).value;
		goals[i].lore = document.getElementById(`loreInput${i}`).value;
		goals[i].method = document.getElementById(`methodInput${i}`).value;
		goals[i].notes = document.getElementById(`notesInput${i}`).value;
	}

	let date = "";

	if (API.success) {
		date = API.name;
	} else {
		// fallback to old method
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		const d = new Date();
		let month;
		console.log(d.getMonth());
		let year = d.getFullYear();
		if (d.getMonth() == 11) {
			year++;
			month = "January";
		} else {
			month = monthNames[d.getMonth() + 1];
		}

		date = `${month} ${year}`;
	}

	let bbcode = `[HEADING=1][CENTER][a=t]Bingo Guide for ${date}[/a][/CENTER][/HEADING]

[HEADING=2][CENTER][a=toc]Table of Contents[/a][/CENTER][/HEADING]
[CENTER] [jump=useful] Most Useful [/jump]
[HR=25][/HR]
 [jump=goals] All Goals [/jump]
[HR=25][/HR]
[jump=info] Difficulty [/jump]
[HR=25][/HR]
[jump=order] Step-by-Step for the Start [/jump]
[HR=25][/HR]
[jump=minions] Recommended Minions [/jump]
[HR=25][/HR]
[jump=notes] Additional Information [/jump][/center]


[HEADING=2][CENTER][a=useful]Most Useful[/a][/CENTER][/HEADING]
[URL="https://discord.gg/kYkWjHy4nJ"]Bingo Brewers Discord (Free God Splashes)[/URL]
[SPOILER="Bingo Website"]
[URL unfurl="true"]https://skyblock.bingo[/URL][/SPOILER]


Overall Bingo Difficulty: [b][COLOR=rgb(65, 168, 95)]Easy[/COLOR][COLOR=rgb(184, 49, 47)]Hard[/COLOR][COLOR=rgb(0, 168, 133)]Medium[/COLOR][/b]

[a=goals]
[HEADING=2][CENTER]All Goals[/CENTER][/HEADING]
[/a]
[TABLE]
[TR]
[TH][CENTER]Row #1[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[0].name}`)}]${goals[0].name}[/a][/b][/TD]
[TD]${goals[0].lore}[/TD]
[TD]${goals[0].method}[/TD]
[TD]${goals[0].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[1].name}`)}]${goals[1].name}[/a][/b][/TD]
[TD]${goals[1].lore}[/TD]
[TD]${goals[1].method}[/TD]
[TD]${goals[1].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[2].name}`)}]${goals[2].name}[/a][/b][/TD]
[TD]${goals[2].lore}[/TD]
[TD]${goals[2].method}[/TD]
[TD]${goals[2].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[3].name}`)}]${goals[3].name}[/a][/b][/TD]
[TD]${goals[3].lore}[/TD]
[TD]${goals[3].method}[/TD]
[TD]${goals[3].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[4].name}`)}]${goals[4].name}[/a][/b][/TD]
[TD]${goals[4].lore}[/TD]
[TD]${goals[4].method}[/TD]
[TD]${goals[4].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #2[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[5].name}`)}]${goals[5].name}[/a][/b][/TD]
[TD]${goals[5].lore}[/TD]
[TD]${goals[5].method}[/TD]
[TD]${goals[5].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[6].name}`)}]${goals[6].name}[/a][/b][/TD]
[TD]${goals[6].lore}[/TD]
[TD]${goals[6].method}[/TD]
[TD]${goals[6].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[7].name}`)}]${goals[7].name}[/a][/b][/TD]
[TD]${goals[7].lore}[/TD]
[TD]${goals[7].method}[/TD]
[TD]${goals[7].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[8].name}`)}]${goals[8].name}[/a][/b][/TD]
[TD]${goals[8].lore}[/TD]
[TD]${goals[8].method}[/TD]
[TD]${goals[8].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[9].name}`)}]${goals[9].name}[/a][/b][/TD]
[TD]${goals[9].lore}[/TD]
[TD]${goals[9].method}[/TD]
[TD]${goals[9].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #3[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[10].name}`)}]${goals[10].name}[/a][/b][/TD]
[TD]${goals[10].lore}[/TD]
[TD]${goals[10].method}[/TD]
[TD]${goals[10].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[11].name}`)}]${goals[11].name}[/a][/b][/TD]
[TD]${goals[11].lore}[/TD]
[TD]${goals[11].method}[/TD]
[TD]${goals[11].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[12].name}`)}]${goals[12].name}[/a][/b][/TD]
[TD]${goals[12].lore}[/TD]
[TD]${goals[12].method}[/TD]
[TD]${goals[12].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[13].name}`)}]${goals[13].name}[/a][/b][/TD]
[TD]${goals[13].lore}[/TD]
[TD]${goals[13].method}[/TD]
[TD]${goals[13].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[14].name}`)}]${goals[14].name}[/a][/b][/TD]
[TD]${goals[14].lore}[/TD]
[TD]${goals[14].method}[/TD]
[TD]${goals[14].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #4[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[15].name}`)}]${goals[15].name}[/a][/b][/TD]
[TD]${goals[15].lore}[/TD]
[TD]${goals[15].method}[/TD]
[TD]${goals[15].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[16].name}`)}]${goals[16].name}[/a][/b][/TD]
[TD]${goals[16].lore}[/TD]
[TD]${goals[16].method}[/TD]
[TD]${goals[16].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[17].name}`)}]${goals[17].name}[/a][/b][/TD]
[TD]${goals[17].lore}[/TD]
[TD]${goals[17].method}[/TD]
[TD]${goals[17].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[18].name}`)}]${goals[18].name}[/a][/b][/TD]
[TD]${goals[18].lore}[/TD]
[TD]${goals[18].method}[/TD]
[TD]${goals[18].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[19].name}`)}]${goals[19].name}[/a][/b][/TD]
[TD]${goals[19].lore}[/TD]
[TD]${goals[19].method}[/TD]
[TD]${goals[19].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #5[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[20].name}`)}]${goals[20].name}[/a][/b][/TD]
[TD]${goals[20].lore}[/TD]
[TD]${goals[20].method}[/TD]
[TD]${goals[20].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[21].name}`)}]${goals[21].name}[/a][/b][/TD]
[TD]${goals[21].lore}[/TD]
[TD]${goals[21].method}[/TD]
[TD]${goals[21].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[22].name}`)}]${goals[22].name}[/a][/b][/TD]
[TD]${goals[22].lore}[/TD]
[TD]${goals[22].method}[/TD]
[TD]${goals[22].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[23].name}`)}]${goals[23].name}[/a][/b][/TD]
[TD]${goals[23].lore}[/TD]
[TD]${goals[23].method}[/TD]
[TD]${goals[23].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${goals[24].name}`)}]${goals[24].name}[/a][/b][/TD]
[TD]${goals[24].lore}[/TD]
[TD]${goals[24].method}[/TD]
[TD]${goals[24].notes}[/TD]
[/TR]
[/TABLE]


[a=info][HEADING=2][CENTER]Difficulty[/CENTER][/HEADING][/a]
[center]Overall Bingo Difficulty: [b][COLOR=rgb(65, 168, 95)]Easy[/COLOR][COLOR=rgb(184, 49, 47)]Hard[/COLOR][COLOR=rgb(0, 168, 133)]Medium[/COLOR][/b]
[/center]

[a=order][HEADING=2][CENTER]Step-by-Step for the Start[/CENTER][/HEADING]
[/a]

Once bingo opens lobby hop until you can create a profile.
/hub immediately and go to the designated hub in splashes for a splash.
Equip your Bingo Pet and begin farming wheat, sell an inventory of wheat for quick coins and buy a sword.
Go to the Spider's Den and get the 3 easy relics (-142, 82, -340/-201, 83, -352/-341, 122, -252).
Unlock The End and Dwarven Mines.

[a=minions][HEADING=2][CENTER]Recommended Minions[/CENTER][/HEADING][/a]

[center][b]Recommended Minion Slots: [/b][/center]

[HEADING=2][CENTER][a=notes]Additional Information[/a][/CENTER][/HEADING]

Tips/Notes:
Do your daily commissions until HOTM 3.
Remember to unlock the Mining Speed perk at HOTM 1.
Use Better Together (500 mining speed) and Gone With The Wind (300-600 mining speed) to your advantage.
You can get coins from doing relics in spider den. (Max 310,000)
Mine sand to reach mining XII for the Dwarven Mines.
Put #BingoBrewers after our splashes!

Guide by ooffyy and proofreaders at Bingo Brewers`;

	document.getElementById("btnOutput").value = bbcode;
	document.getElementById("btnOutput").style.display = "block";

	// copy to clipboard
	document.getElementById("btnOutput").select();
	document.execCommand("copy");
}

function getName(str) {
	return str.replaceAll(/[^0-9a-z]/gi, "").toLowerCase();
}
