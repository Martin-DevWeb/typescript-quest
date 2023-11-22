import { Data } from "./level3data";

console.log(new Data("Léon").getName());

class TypeOfRpg extends Data {
  type: string;

  constructor(gameMaster: string, type: string) {
    super(gameMaster);
    this.type = type;
  }

  describe(): string {
    return (
      super.getName() +
      ` a utilisé le système de "${this.type}" pour son jeu de rôle.`
    );
  }
}

let newGame = new TypeOfRpg("Léon", "Dungeon and dragons");
console.log(newGame);
console.log(newGame.describe());
