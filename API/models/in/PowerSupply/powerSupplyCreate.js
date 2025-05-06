module.exports = class PowerSupplyCreate {
  title;
  strength;
  cost;
  sertificate;
  cost;
  image;
  description;
  constructor(powerSupply) {
    this.cost = powerSupply.cost;
    this.strength = powerSupply.strength;
    this.image = powerSupply.image;
    this.description = powerSupply.description;
    this.title = powerSupply.title;
    this.sertificate = powerSupply.sertificate;
    this.cost = powerSupply.cost;
  }
};
