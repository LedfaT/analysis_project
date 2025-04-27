module.exports = class PowerSupplyUpdate {
  title;
  strength;
  cost;
  sertificate;
  cost;
  constructor(powerSupply) {
    this.cost = powerSupply.cost;
    this.strength = powerSupply.strength;
    this.title = powerSupply.title;
    this.sertificate = powerSupply.sertificate;
    this.cost = powerSupply.cost;
  }
};
