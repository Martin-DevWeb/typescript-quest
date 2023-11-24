class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon!: Weapon;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero) {
    switch (this.weapon.name) {
      case "Axe":
        if (opponent.weapon.name == "Sword") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
      case "Sword":
        if (opponent.weapon.name == "Bow") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
      case "Bow":
        if (opponent.weapon.name == "Club") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
      case "Club":
        if (opponent.weapon.name == "Dagger") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
      case "Dagger":
        if (opponent.weapon.name == "Staff") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
      case "Staff":
        if (opponent.weapon.name == "Axe") {
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage) * 2);
        } else
          return (opponent.life =
            opponent.life - (this.power + this.weapon.damage));
    }
  }

  isAlive() {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }

  getName() {
    return this.name;
  }

  pvLeft() {
    return this.life;
  }

  attackPower() {
    return this.power;
  }

  equip(weapon: Weapon) {
    return (this.weapon = weapon);
  }
}

class Weapon {
  name: String;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Axe", 5));
  }
}

class HeroDagger extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Dagger", 1));
  }
}

class HeroStaff extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Staff", 10));
  }
}

class HeroClub extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Club", 7));
  }
}

class HeroBow extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Bow", 5));
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Sword", 5));
  }
}

let character: string, opponent: string;

function Character(charac: string) {
  character = charac;
}

function Opponent(opp: string) {
  opponent = opp;
}

function Battle() {
  let j1 = document.getElementById("character")!;
  let j2 = document.getElementById("opponent")!;
  j1.innerHTML = `<progress id="${character}Life" class="position-absolute translate-middle-y"></progress>
  <img src="./img/${character}.webp" alt="${character}" id="${character}"
    /><p id="${
      character + "Win"
    }" class="d-none fs-1 fw-bold text-success badge bg-success-subtle position-absolute top-0 start-50 translate-middle">WINNER !</p>
    <img src="./img/fireball.png" alt="fireball" id="fireballLeft" class="d-none"/>
    `;
  j2.innerHTML = `<progress id="${opponent}Life" class="position-absolute translate-middle-y"></progress>
  <img src="./img/fireball.png" alt="fireball" id="fireballRight" class="d-none"/>
  <img src="./img/${opponent}.webp" alt="${opponent}" id="${opponent}"
    /><p id="${
      opponent + "Win"
    }" class="d-none fs-1 fw-bold text-success badge bg-success-subtle position-absolute top-0 start-50 translate-middle">WINNER !</p>
    `;

  if (character != undefined && opponent != undefined) {
    let player1: Hero = leBarbare,
      player2: Hero = leBarbare;
    let selection = document.getElementById("selection");
    let battle = document.getElementById("battle");
    selection?.classList.add("d-none");
    battle?.classList.remove("d-none");
    switch (character) {
      case "Barbare":
        player1 = leBarbare;
        break;
      case "Elfe":
        player1 = lElfe;
        break;
      case "Magicienne":
        player1 = laMagicienne;
        break;
      case "Nain":
        player1 = leNain;
        break;
      case "Ogre":
        player1 = lOgre;
        break;
      case "Ranger":
        player1 = leRanger;
        break;
      case "Reivax":
        player1 = reivax;
        break;
      case "Voleur":
        player1 = leVoleur;
        break;
      case "Zangdar":
        player1 = zangdar;
        break;
    }
    switch (opponent) {
      case "Barbare":
        player2 = leBarbare;
        break;
      case "Elfe":
        player2 = lElfe;
        break;
      case "Magicienne":
        player2 = laMagicienne;
        break;
      case "Nain":
        player2 = leNain;
        break;
      case "Ogre":
        player2 = lOgre;
        break;
      case "Ranger":
        player2 = leRanger;
        break;
      case "Reivax":
        player2 = reivax;
        break;
      case "Voleur":
        player2 = leVoleur;
        break;
      case "Zangdar":
        player2 = zangdar;
        break;
    }
    Baston(player1, player2);
  } else if (character != undefined) {
    window.alert("Please choose your opponent");
  } else if (opponent != undefined) {
    window.alert("Please choose your character");
  } else window.alert("Please choose your character and opponent");
}

let leBarbare = new HeroSword("Le barbare", 3, 60);
let lElfe = new HeroBow("L'elfe", 4, 50);
let laMagicienne = new HeroStaff("La magicienne", 2, 50);
let leNain = new HeroAxe("Le nain", 3, 70);
let lOgre = new HeroClub("L'ogre", 5, 80);
let leRanger = new HeroDagger("Le ranger", 2, 60);
let reivax = new HeroStaff("Reivax", 1, 45);
let leVoleur = new HeroDagger("Le voleur", 3, 50);
let zangdar = new HeroStaff("Zangdar", 5, 100);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function Baston(j1: Hero, j2: Hero) {
  let turn = 1;
  let player1Img = document.getElementById(`${character}`);
  let player1Win = document.getElementById(`${character}Win`);
  let player2Img = document.getElementById(`${opponent}`);
  let player2Win = document.getElementById(`${opponent}Win`);
  let characPv = document.getElementById("characterPv");
  let oppPv = document.getElementById("opponentPv");
  let fireballLeft = document.getElementById("fireballLeft");
  let fireballRight = document.getElementById("fireballRight");
  let characterLife = document.getElementById(`${character}Life`);
  let opponentLife = document.getElementById(`${opponent}Life`);

  characPv!.innerHTML = `${j1.pvLeft()} pv`;
  oppPv!.innerHTML = `${j2.pvLeft()} pv`;
  characterLife?.setAttribute("max", `${j1.pvLeft()}`);
  characterLife?.setAttribute("value", `${j1.pvLeft()}`);
  opponentLife?.setAttribute("max", `${j2.pvLeft()}`);
  opponentLife?.setAttribute("value", `${j2.pvLeft()}`);

  while (j1.isAlive() && j2.isAlive()) {
    console.log(`turn:${turn}`);
    if (j1.weapon.name == "Dagger") {
      j1.attack(j2);
      player1Img?.classList.add("hit");
      await sleep(1000);
      player1Img?.classList.remove("hit");
      await sleep(100);
    }
    if (j2.weapon.name == "Dagger") {
      j2.attack(j1);
      player2Img?.classList.add("hitBack");
      await sleep(1000);
      player2Img?.classList.remove("hitBack");
      await sleep(100);
    }
    if (j1.weapon.name != "Staff" && j2.weapon.name != "Staff") {
      j1.attack(j2);
      j2.attack(j1);
      player1Img?.classList.add("hit");
      player2Img?.classList.add("hitBack");
      await sleep(1000);
      player1Img?.classList.remove("hit");
      player2Img?.classList.remove("hitBack");
    }
    if (j1.weapon.name == "Staff") {
      if (turn % 2 != 0) {
        j1.attack(j2);
        fireballLeft?.classList.remove("d-none");
        fireballLeft?.classList.add("fireballLeft");
        await sleep(700);
        fireballLeft?.classList.add("d-none");
        fireballLeft?.classList.remove("fireballLeft");
        await sleep(100);
      }
      if (j2.weapon.name != "Staff") {
        j2.attack(j1);
        player2Img?.classList.add("hitBack");
        await sleep(1000);
        player2Img?.classList.remove("hitBack");
      }
    }
    if (j2.weapon.name == "Staff") {
      if (turn % 2 != 0) {
        j2.attack(j1);
        fireballRight?.classList.remove("d-none");
        fireballRight?.classList.add("fireballRight");
        await sleep(700);
        fireballRight?.classList.add("d-none");
        fireballRight?.classList.remove("fireballRight");
        await sleep(100);
      }
      if (j1.weapon.name != "Staff") {
        j1.attack(j2);
        player1Img?.classList.add("hit");
        await sleep(1000);
        player1Img?.classList.remove("hit");
      }
    }
    characPv!.innerHTML = `${j1.pvLeft()} pv`;
    oppPv!.innerHTML = `${j2.pvLeft()} pv`;
    characterLife?.setAttribute("value", `${j1.pvLeft()}`);
    opponentLife?.setAttribute("value", `${j2.pvLeft()}`);
    await sleep(500);
    console.log(`${j1.getName()} : ${j1.pvLeft()}pv`);
    console.log(`${j2.getName()} : ${j2.pvLeft()}pv`);
    turn++;
  }
  if (j1.isAlive()) {
    console.log(`${j1.getName()} wins !`);
    player1Win?.classList.remove("d-none");
    player2Img?.classList.add("dying");
    player2Img?.addEventListener("animationend", () => {
      player2Img?.classList.add("d-none");
      opponentLife?.classList.add("d-none");
      oppPv!.innerHTML = "";
    });
  } else if (j2.isAlive()) {
    console.log(`${j2.getName()} wins !`);
    player2Win?.classList.remove("d-none");
    player1Img?.classList.add("dying");
    player1Img?.addEventListener("animationend", () => {
      player1Img?.classList.add("d-none");
      characterLife?.classList.add("d-none");
      characPv!.innerHTML = "";
    });
  } else {
    console.log("It's a draw !");
    player1Img?.classList.add("dying");
    player1Img?.addEventListener("animationend", () => {
      player1Img?.classList.add("d-none");
      characterLife?.classList.add("d-none");
      characPv!.innerHTML;
    });
    player2Img?.classList.add("dying");
    player2Img?.addEventListener("animationend", () => {
      player2Img?.classList.add("d-none");
      opponentLife?.classList.add("d-none");
      oppPv!.innerHTML = "";
    });
    let draw = document.getElementById("draw");
    draw?.classList.remove("d-none");
  }
}

function Reload() {
  window.location.reload();
}
