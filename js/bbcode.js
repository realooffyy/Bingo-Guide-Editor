export async function generateBBCode() {
	let API;
	({ API } = await import("./callAPI.js"));

	let data = [];

	for (i = 0; i < 25; i++) {
		data.push({ name: "", lore: "", method: "", notes: "" });
		data[i].name = document.getElementById(`nameInput${i}`).value;
		data[i].lore = document.getElementById(`loreInput${i}`).value;
		data[i].method = document.getElementById(`methodInput${i}`).value;
		data[i].notes = document.getElementById(`notesInput${i}`).value;
	}

	// eg. July 2026
	const date = API.name;

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
[TD][b][a=${getName(`${data[0].name}`)}]${data[0].name}[/a][/b][/TD]
[TD]${data[0].lore}[/TD]
[TD]${data[0].method}[/TD]
[TD]${data[0].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[1].name}`)}]${data[1].name}[/a][/b][/TD]
[TD]${data[1].lore}[/TD]
[TD]${data[1].method}[/TD]
[TD]${data[1].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[2].name}`)}]${data[2].name}[/a][/b][/TD]
[TD]${data[2].lore}[/TD]
[TD]${data[2].method}[/TD]
[TD]${data[2].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[3].name}`)}]${data[3].name}[/a][/b][/TD]
[TD]${data[3].lore}[/TD]
[TD]${data[3].method}[/TD]
[TD]${data[3].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[4].name}`)}]${data[4].name}[/a][/b][/TD]
[TD]${data[4].lore}[/TD]
[TD]${data[4].method}[/TD]
[TD]${data[4].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #2[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${data[5].name}`)}]${data[5].name}[/a][/b][/TD]
[TD]${data[5].lore}[/TD]
[TD]${data[5].method}[/TD]
[TD]${data[5].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[6].name}`)}]${data[6].name}[/a][/b][/TD]
[TD]${data[6].lore}[/TD]
[TD]${data[6].method}[/TD]
[TD]${data[6].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[7].name}`)}]${data[7].name}[/a][/b][/TD]
[TD]${data[7].lore}[/TD]
[TD]${data[7].method}[/TD]
[TD]${data[7].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[8].name}`)}]${data[8].name}[/a][/b][/TD]
[TD]${data[8].lore}[/TD]
[TD]${data[8].method}[/TD]
[TD]${data[8].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[9].name}`)}]${data[9].name}[/a][/b][/TD]
[TD]${data[9].lore}[/TD]
[TD]${data[9].method}[/TD]
[TD]${data[9].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #3[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${data[10].name}`)}]${data[10].name}[/a][/b][/TD]
[TD]${data[10].lore}[/TD]
[TD]${data[10].method}[/TD]
[TD]${data[10].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[11].name}`)}]${data[11].name}[/a][/b][/TD]
[TD]${data[11].lore}[/TD]
[TD]${data[11].method}[/TD]
[TD]${data[11].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[12].name}`)}]${data[12].name}[/a][/b][/TD]
[TD]${data[12].lore}[/TD]
[TD]${data[12].method}[/TD]
[TD]${data[12].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[13].name}`)}]${data[13].name}[/a][/b][/TD]
[TD]${data[13].lore}[/TD]
[TD]${data[13].method}[/TD]
[TD]${data[13].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[14].name}`)}]${data[14].name}[/a][/b][/TD]
[TD]${data[14].lore}[/TD]
[TD]${data[14].method}[/TD]
[TD]${data[14].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #4[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${data[15].name}`)}]${data[15].name}[/a][/b][/TD]
[TD]${data[15].lore}[/TD]
[TD]${data[15].method}[/TD]
[TD]${data[15].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[16].name}`)}]${data[16].name}[/a][/b][/TD]
[TD]${data[16].lore}[/TD]
[TD]${data[16].method}[/TD]
[TD]${data[16].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[17].name}`)}]${data[17].name}[/a][/b][/TD]
[TD]${data[17].lore}[/TD]
[TD]${data[17].method}[/TD]
[TD]${data[17].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[18].name}`)}]${data[18].name}[/a][/b][/TD]
[TD]${data[18].lore}[/TD]
[TD]${data[18].method}[/TD]
[TD]${data[18].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[19].name}`)}]${data[19].name}[/a][/b][/TD]
[TD]${data[19].lore}[/TD]
[TD]${data[19].method}[/TD]
[TD]${data[19].notes}[/TD]
[/TR]
[TR]
[TH][CENTER]Row #5[/CENTER][/TH]

[TH][CENTER]Description[/CENTER][/TH]

[TH][CENTER]Method[/CENTER][/TH]

[TH][CENTER]Notes[/CENTER][/TH]
[/TR]
[TR]
[TD][b][a=${getName(`${data[20].name}`)}]${data[20].name}[/a][/b][/TD]
[TD]${data[20].lore}[/TD]
[TD]${data[20].method}[/TD]
[TD]${data[20].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[21].name}`)}]${data[21].name}[/a][/b][/TD]
[TD]${data[21].lore}[/TD]
[TD]${data[21].method}[/TD]
[TD]${data[21].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[22].name}`)}]${data[22].name}[/a][/b][/TD]
[TD]${data[22].lore}[/TD]
[TD]${data[22].method}[/TD]
[TD]${data[22].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[23].name}`)}]${data[23].name}[/a][/b][/TD]
[TD]${data[23].lore}[/TD]
[TD]${data[23].method}[/TD]
[TD]${data[23].notes}[/TD]
[/TR]
[TR]
[TD][b][a=${getName(`${data[24].name}`)}]${data[24].name}[/a][/b][/TD]
[TD]${data[24].lore}[/TD]
[TD]${data[24].method}[/TD]
[TD]${data[24].notes}[/TD]
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

Guide by [USER=3768762]Dredlig[/USER], [USER=1079233]HunterTheHunter[/USER], [USER=3270837]Indigo_Polecat[/USER]
Website by [USER=2881883]XessDx[/USER]`;

	document.getElementById("btnOutput").value = bbcode;
	document.getElementById("btnOutput").style.display = "block";

	// copy to clipboard
	document.getElementById("btnOutput").select();
	document.execCommand("copy");
}

function getName(str) {
	return str.replaceAll(/[^0-9a-z]/gi, "").toLowerCase();
}
