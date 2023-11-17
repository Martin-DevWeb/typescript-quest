/* LEVEL 1 */

let rpgName: string = "Baldur's gate III";
let playerAge: number = 31;
let campaignInProgress: boolean = true;

let players: string[] = ["Shadowheart", "Astarion", "Lae'zel", "Karlach"];

let anyType;
anyType = 8;
anyType = "I can be a string, i am a chameleon variable !";

function rpg(rpgName: string, players: string[]): string {
  let playersNumber: number = players.length;
  return rpgName.toUpperCase() + " - " + playersNumber + " joueurs.";
}
console.log(rpg(rpgName, players));
