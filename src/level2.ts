/* Level 2 */

class Rpg {
  rpgName: string = "Baldur's gate III";
  party = ["Shadowheart", "Astarion", "Lae'zel", "Karlach"];
  campaignInProgress: boolean = true;

  constructor(rpgName: string, party: string[], campaignInProgress: boolean) {
    this.rpgName = rpgName;
    this.party = party;
    this.campaignInProgress = campaignInProgress;
  }

  display(): void {
    console.log(this.rpgName);
  }
}

let resume = new Rpg("XCOM 2", ["Commander", "Shen"], true);
console.log(resume);
console.log(resume instanceof Rpg);
resume.display();
