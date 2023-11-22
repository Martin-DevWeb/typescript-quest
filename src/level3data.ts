export class Data {
  gameMaster: string;

  constructor(gameMaster: string) {
    this.gameMaster = gameMaster;
  }

  getName(): string {
    return this.gameMaster;
  }
}
