export class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon: Weapon = new Weapon("Fists", 1);

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

export class Weapon {
  name: String;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Axe", 5));
  }
}

export class HeroDagger extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Dagger", 1));
  }
}

export class HeroStaff extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Staff", 10));
  }
}

export class HeroClub extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Club", 7));
  }
}

export class HeroBow extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Bow", 5));
  }
}

export class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.equip(new Weapon("Sword", 5));
  }
}
