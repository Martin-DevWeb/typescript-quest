/* LEVEL 1 */

// Primitive types
let rpgName: string = "Baldur's gate III";
let playerAge: number = 31;
let campaignInProgress: boolean = true;

// Array
let players: string[] = ["Shadowheart", "Astarion", "Lae'zel", "Karlach"];

// Type "any"
let anyType;
anyType = 8;
anyType = "I can be like a string, chameleon variable !";

// Function types
function rpg(rpgName: string, players: string[]): string {
  let playersNumber: number = players.length;
  return rpgName.toUpperCase() + " - " + playersNumber + " joueurs.";
}
console.log(rpg(rpgName, players));
